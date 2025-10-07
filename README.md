# Netflix (Netflix-clone)

> Projeto de estudo: uma landing simples inspirada no visual de serviços de streaming, com páginas de login e recuperação de senha.

Este repositório contém apenas o front-end estático (HTML, CSS e JavaScript) usado para aprendizado e demonstração.

Principais pontos

- Layout responsivo da landing (hero + CTA).
- Página de login com recursos simples: lembrar-me, mostrar/ocultar senha e feedback inline.
- Página "Esqueci a senha" (fluxo simulado).
- Uso de imagens e sobreposição (background JPG + SVG pattern).

Estrutura do projeto

- `index.html` — landing page
- `css/` — estilos globais
- `js/` — scripts da landing
- `img/` — imagens (logo, background, etc.)
- `page-login/` — todas as páginas e assets relacionadas ao login
  - `login.html`
  - `css/`
  - `js/`
  - `forgot-password/`

Repositório

Repositório remoto: https://github.com/carlos-bryan/Netflix-clone

Como testar localmente

1) Navegue até a pasta do projeto:

```bash
cd "/home/<seu-usuario>/Área de trabalho/netflix"
```

2) Inicie um servidor HTTP simples (padrão, sem dependências extras):

```bash
python3 -m http.server 8000
# Abra http://localhost:8000 no navegador
```

Alternativa com Node (se preferir):

```bash
npx http-server -c-1 .
```

Uso do Git (link com o seu repositório no GitHub)

Se ainda não inicializou o repositório local, os passos são estes (já commitados no repositório remoto deste projeto):

```bash
git init
git add .
git commit -m "Initial commit: landing, login and forgot pages"
git remote add origin https://github.com/carlos-bryan/Netflix-clone.git
git branch -M main
git push -u origin main
```

Contribuições

- Abrir issues para sugerir melhorias ou reportar bugs.
- Enviar pull requests para propor mudanças. Para pequenas correções, descreva o objetivo do PR e inclua screenshots quando relevantes.

Boas práticas locais

- Use um servidor HTTP (como `python3 -m http.server`) para evitar problemas de CORS ou caminhos relativos.
- Preserve os ativos na pasta `img/` e mantenha caminhos de imagens como `/img/...` se for servir o site na raiz do domínio.

Licença

Este projeto serve apenas para estudo. Se quiser, posso adicionar uma licença (MIT, Apache-2.0, etc.).

Capturas de tela

Adicione imagens/prints na pasta `img/` e use-os aqui para deixar o README mais visual. Exemplo:

```
img/screenshot-landing.png
img/screenshot-login.png
```

O que mais posso fazer

- Incluir um `LICENSE` (por exemplo MIT) e commitar.
- Adicionar instruções de deploy (GitHub Pages).
- Adicionar badges (status, licença, etc.) e screenshots.

Diga o que prefere que eu atualize e eu faço o próximo commit.
