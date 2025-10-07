document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('loginForm');
	const email = document.getElementById('email');
	const password = document.getElementById('password');


	// small translations map (keep in sync with main page)
	const translations = {
		pt: {
			login: 'Entrar',
			emailPlaceholder: 'Email',
			labelEmail: 'Email',
			labelPassword: 'Senha',
			signupText: 'Ainda não tem uma conta? <a href="../index.html">Assine agora</a>'
		},
		en: {
			login: 'Sign In',
			emailPlaceholder: 'Email',
			labelEmail: 'Email',
			labelPassword: 'Password',
			signupText: 'Don\'t have an account? <a href="../index.html">Sign up now</a>'
		}
	};

	function applyTranslations(lang){
		if(!translations[lang]) return;
		document.querySelectorAll('[data-i18n]').forEach(el=>{
			const key = el.getAttribute('data-i18n');
			if(translations[lang][key]) el.innerHTML = translations[lang][key];
		});
		document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
			const key = el.getAttribute('data-i18n-placeholder');
			if(translations[lang][key]) el.placeholder = translations[lang][key];
		});
	}

	const saved = localStorage.getItem('nf_lang') || 'pt';
	applyTranslations(saved);

	// remember-me: prefill email if chosen
	const rememberKey = 'nf_remember_email';
	const rememberCheckbox = document.getElementById('remember');
	const togglePw = document.getElementById('togglePw');
	const feedback = document.getElementById('formFeedback');

	if (localStorage.getItem(rememberKey)) {
		email.value = localStorage.getItem(rememberKey);
		if (rememberCheckbox) rememberCheckbox.checked = true;
	}

	if (togglePw) {
		togglePw.addEventListener('click', function () {
			const isShown = password.type === 'text';
			password.type = isShown ? 'password' : 'text';
			togglePw.textContent = isShown ? 'Mostrar' : 'Ocultar';
			togglePw.setAttribute('aria-pressed', String(!isShown));
		});
	}

	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			feedback.textContent = '';
			const em = email.value.trim();
			const pw = password.value;
			if (!em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
				feedback.textContent = 'Informe um email válido.';
				email.focus();
				return;
			}
			if (!pw || pw.length < 4) {
				feedback.textContent = 'Informe sua senha (mínimo 4 caracteres).';
				password.focus();
				return;
			}

			// Simular autenticação (demo)
			feedback.textContent = '';
			// store remember preference
			if (rememberCheckbox && rememberCheckbox.checked) {
				localStorage.setItem(rememberKey, em);
			} else {
				localStorage.removeItem(rememberKey);
			}

			// show success and redirect
			feedback.style.color = '#c8ffd8';
			feedback.textContent = 'Login bem-sucedido — redirecionando...';
			setTimeout(() => window.location.href = '../index.html', 900);
		});
	}
});
