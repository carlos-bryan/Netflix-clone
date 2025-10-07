document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('ctaForm');
	const emailInput = document.getElementById('emailInput');
	const languageSelect = document.getElementById('languageSelect');

	// simple i18n dictionary
	const translations = {
		pt: {
			login: 'Entrar',
			heroTitle: 'Filmes, séries e muito mais. Sem limites.',
			heroSubtitle: 'Assista onde quiser. Cancele quando quiser.',
			heroText: 'Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.',
			emailPlaceholder: 'Email',
			ctaButton: 'Vamos lá >'
		},
		en: {
			login: 'Sign In',
			heroTitle: 'Movies, series and much more. No limits.',
			heroSubtitle: 'Watch anywhere. Cancel anytime.',
			heroText: 'Ready to watch? Enter your email to create or restart your membership.',
			emailPlaceholder: 'Email',
			ctaButton: "Get Started >"
		}
	};

	function applyTranslations(lang){
		if(!translations[lang]) return;
		document.querySelectorAll('[data-i18n]').forEach(el=>{
			const key = el.getAttribute('data-i18n');
			if(translations[lang][key]) el.textContent = translations[lang][key];
		});
		document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
			const key = el.getAttribute('data-i18n-placeholder');
			if(translations[lang][key]) el.placeholder = translations[lang][key];
		});
	}

	// load language preference (fix operator precedence)
	const ls = localStorage.getItem('nf_lang');
	const saved = ls ? ls : (navigator.language && navigator.language.startsWith('en') ? 'en' : 'pt');
	if (languageSelect) languageSelect.value = saved;
	applyTranslations(saved);

	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			const email = emailInput.value.trim();
			if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				emailInput.focus();
				alert('Por favor, informe um email válido.');
				return;
			}
			// Simular ação (aqui você integraria com back-end)
			alert('Obrigado! Enviamos instruções para ' + email);
			form.reset();
		});
	}

	if (languageSelect) {
		languageSelect.addEventListener('change', function () {
			const val = languageSelect.value;
			localStorage.setItem('nf_lang', val);
			applyTranslations(val);
		});
	}
});
