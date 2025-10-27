# Projeto ONG: Instituto Memento

Este é o projeto final da disciplina de Desenvolvimento Front-End, um site completo e responsivo para uma ONG fictícia, o "Instituto Memento", focado em educação para jovens. O projeto foi construído em 4 entregas, evoluindo de um HTML estático para uma SPA (Single Page Application) dinâmica, acessível e otimizada.

**Link do Site ao Vivo (GitHub Pages):**
[https://gabriellecoslope.github.io/projeto-ong/](https://gabriellecoslope.github.io/projeto-ong/)

---

## Tecnologias Utilizadas

* **HTML5:** Estrutura semântica (`<header>`, `<main>`, `<article>`).
* **CSS3:** Design System com Variáveis CSS, layout responsivo (Flexbox e Grid), e Modo Escuro.
* **JavaScript (ES6+):** Manipulação do DOM, `fetch()` para navegação SPA, `localStorage` e validação de formulários.
* **Git & GitHub:** Controle de versão, *branching* e *deploy* com GitHub Pages.

---

## Funcionalidades Principais

O site implementa funcionalidades de todas as 4 entregas do curso:

### Entrega I: Estrutura HTML
* Estrutura semântica completa com 3 páginas (`index.html`, `projetos.html`, `cadastro.html`).
* Formulário de cadastro completo com tipos de input do HTML5 e atributos de validação.

### Entrega II: Design e Responsividade
* **Design System Modular:** O CSS é dividido em 4 arquivos (`main`, `variables`, `layout`, `components`) e usa Variáveis CSS para cores, fontes (Poppins) e espaçamento.
* **Layout Responsivo:** O site é *mobile-first* e usa um grid customizado de 12 colunas para se adaptar a tablets e desktops.
* **Componentes:** Design profissional para botões, cards de projeto e rodapé.

### Entrega III: Interatividade (JavaScript)
* **Single Page Application (SPA):** A navegação entre as páginas é feita dinamicamente com `fetch()` e `history.pushState()`, sem recarregar a página.
* **Templating JS:** Os cards de projeto são gerados dinamicamente a partir de um *array* de dados em JavaScript.
* **Validação de Formulário:** Script de validação customizado na página de cadastro que exibe mensagens de erro em tempo real.
* **Máscaras de Input:** Formatação automática (em tempo real) para campos de CPF, CEP e Telefone.

### Entrega IV: Acessibilidade e Deploy
* **Acessibilidade (WCAG 2.1 AA):**
    * **Navegação por Teclado:** O site é 100% navegável usando a tecla "Tab".
    * **Suporte a Leitores de Tela:** Uso correto de tags semânticas, `lang="pt-BR"` e atributos ARIA (`role`, `aria-label`, `aria-expanded`).
    * **Modo Escuro (Dark Mode):** Um botão no header alterna o tema do site e salva a preferência do usuário no `localStorage`.
    * **Menu Hambúrguer:** Implementado para garantir a navegação acessível em dispositivos móveis.
* **Versionamento (Git):** O projeto utilizou um fluxo de trabalho com *branches* (`feature/entrega-4`), *Pull Requests* e *Commits Semânticos* para gerenciar as mudanças.
* **Deploy:** O site está publicado e disponível para acesso público através do **GitHub Pages**.

---

## 📂 Estrutura de Pastas

O projeto segue uma organização de pastas clara e modular:

```

projeto-ong/
|
|-- index.html         (Página Inicial)
|-- projetos.html      (Página de Projetos)
|-- cadastro.html      (Página de Cadastro)
|
|-- css/
|   |-- main.css         (Importa todos os outros CSS)
|   |-- variables.css    (Design System: cores, fontes)
|   |-- layout.css       (Grid, breakpoints, container)
|   |-- components.css   (Botões, cards, header, footer)
|
|-- js/
|   |-- main.js          (Contém toda a lógica da SPA e validação)
|
|-- images/
|-- ong-logo.png
|-- hero-image.jpg
|-- project-culture.jpg
|-- project-education.jpg
|-- project-sports.jpg
|
|-- README.md          (Esta documentação)

```

## Como Rodar o Projeto Localmente

Como este projeto é uma **Single Page Application (SPA)** que usa `fetch()` para carregar páginas, ele **não funcionará** se você apenas clicar duas vezes no `index.html` (devido à política de segurança CORS do navegador).

Ele precisa ser executado a partir de um servidor local.

**Recomendado (VS Code):**
1.  Abra a pasta do projeto no Visual Studio Code.
2.  Instale a extensão **"Live Server"** de Ritwick Dey.
3.  Clique com o botão direito no `index.html` e selecione "Open with Live Server" (ou clique no botão `Go Live` no canto inferior direito).
4.  O site abrirá em `http://localhost:5500` (ou outra porta).

**Alternativa (Python):**
1.  Abra um terminal na pasta do projeto.
2.  Execute o comando: `python -m http.server`
3.  Acesse `http://localhost:8000` no seu navegador.

---

## Autoria

**Gabrielle Coslope**
* [LinkedIn](https://www.linkedin.com/in/gabriellecoslope)
* [GitHub](https://github.com/GabrielleCoslope)
```

