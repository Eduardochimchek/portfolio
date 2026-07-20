# Portfolio | Eduardo Chimchek Jeronimo

Site pessoal com meu perfil profissional, projetos e formas de contato.

**Online:** [eduardochimchek.github.io/portfolio](https://eduardochimchek.github.io/portfolio/)

## Sobre o projeto

Portfolio estático, sem framework no front. O foco é ser leve, rápido e fácil de manter.

**Stack:**

- HTML5 semântico
- SCSS modular
- JavaScript (vanilla)
- GitHub Pages + GitHub Actions

## Estrutura

```text
portfolio/
├── index.html          # página principal
├── assets/
│   ├── scss/           # estilos (fonte)
│   ├── css/            # CSS compilado
│   ├── js/             # interações (menu, scroll reveal)
│   └── image/          # imagens e ícones
├── robots.txt
└── sitemap.xml
```

## Rodar local

Precisa de [Node.js](https://nodejs.org/) instalado.

```bash
npm install
npm run watch:css
```

Abra o `index.html` no navegador. O `watch:css` recompila o SCSS quando você salvar.

**Outros comandos:**

```bash
npm run build   # gera o CSS de produção
npm run lint    # valida HTML e JavaScript
```

## Deploy

O deploy é automático. Ao dar push na branch `master`, o workflow `.github/workflows/deploy-pages.yml`:

1. instala dependências
2. roda o build do CSS
3. publica na branch `gh-pages`

Também dá para disparar manualmente em **Actions > Deploy GitHub Pages > Run workflow**.

## Contato

- **E-mail:** eduardochimcheck@gmail.com
- **LinkedIn:** [Eduardo Chimchek Jeronimo](https://www.linkedin.com/in/eduardo-chimchek-jeronimo-3539911a2/)
- **GitHub:** [Eduardochimchek](https://github.com/Eduardochimchek)
