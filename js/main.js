/* ===================================================================
   PROJETO INSTITUTO MEMENTO - ENTREGA III
   Arquivo: js/main.js
   Organizado por funcionalidade.
=================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ======================================================
       FUNCIONALIDADE 1: SPA (Single Page Application)
    ====================================================== */
    
    const mainContent = document.getElementById('main-content');

    const loadPage = async (url) => {
        try {
            // Adicionamos um cache-buster para garantir que o navegador pegue o HTML novo
            const response = await fetch(url + '?t=' + new Date().getTime()); 
            if (!response.ok) {
                throw new Error('Página não encontrada');
            }
            const html = await response.text();
            
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            const newTitle = doc.querySelector('title').innerText;
            const newMain = doc.getElementById('main-content').innerHTML;

            document.title = newTitle;
            mainContent.innerHTML = newMain;

            initializePageScripts(); // Re-inicializa os scripts da página nova

        } catch (error) {
            console.error('Erro ao carregar página:', error);
            mainContent.innerHTML = '<h1>Erro 404: Página não encontrada</h1>';
        }
    };

    document.body.addEventListener('click', (e) => {
        if (e.target.matches('.nav-route') || e.target.closest('.nav-route')) {
            e.preventDefault(); 
            
            // Pega o href do <a>, mesmo que o usuário clique num ícone/texto dentro dele
            const link = e.target.closest('.nav-route');
            const url = link.href;
            
            history.pushState(null, '', url);
            loadPage(url);
            
            // Atualiza a classe .active no menu
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });

    window.addEventListener('popstate', () => {
        loadPage(window.location.pathname);
    });

    /* ======================================================
       FUNCIONALIDADE 2: TEMPLATING JAVASCRIPT
    ====================================================== */

    const projectData = [
        {
            /* --- CAMINHO CORRIGIDO AQUI --- */
            img: 'images/project-education.jpg',
            alt: 'Educação Digital',
            badge: 'Educação',
            title: 'Educação Digital',
            desc: 'Programa de inclusão digital que oferece aulas de programação e design.'
        },
        {
            /* --- CAMINHO CORRIGIDO AQUI --- */
            img: 'images/project-sports.jpg',
            alt: 'Esporte na Comunidade',
            badge: 'Esporte',
            title: 'Esporte na Comunidade',
            desc: 'Incentivo à prática esportiva como ferramenta de inclusão social e saúde.'
        },
        {
            /* --- CAMINHO CORRIGIDO AQUI --- */
            img: 'images/project-culture.jpg',
            alt: 'Arte e Cultura',
            badge: 'Cultura',
            title: 'Arte e Cultura',
            desc: 'Oficinas de arte, música, dança e teatro para expandir os horizontes.'
        },
        {
            /* --- CAMINHO CORRIGIDO AQUI --- */
            img: 'images/hero-image.jpg', 
            alt: 'Alfabetização',
            badge: 'Educação',
            title: 'Alfabetização de Adultos',
            desc: 'Promovendo autonomia, cidadania e novas oportunidades de vida.'
        }
    ];

    const createProjectCard = (project) => {
        return `
            <div class="col-lg-4 col-md-6">
                <article class="card">
                    <img src="${project.img}" alt="${project.alt}" class="card-img">
                    <div class="card-body">
                        <span class="badge">${project.badge}</span>
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-text">${project.desc}</p>
                        <a href="#" class="card-link">Saiba Mais &rarr;</a>
                    </div>
                </article>
            </div>
        `;
    };

    const renderProjects = () => {
        const grid = document.getElementById('project-grid');
        if (!grid) return; 

        let gridHTML = '';
        projectData.forEach(project => {
            gridHTML += createProjectCard(project);
        });
        
        grid.innerHTML = gridHTML;
    };


    /* ======================================================
       FUNCIONALIDADE 3: VALIDAÇÃO DE FORMULÁRIO (JS)
    ====================================================== */

    const showError = (fieldId, message) => {
        const field = document.getElementById(fieldId);
        const errorText = document.getElementById(`${fieldId}-error`);
        if (field) field.classList.add('is-invalid');
        if (errorText) errorText.innerText = message;
    };

    const clearError = (fieldId) => {
        const field = document.getElementById(fieldId);
        const errorText = document.getElementById(`${fieldId}-error`);
        if (field) field.classList.remove('is-invalid');
        if (errorText) errorText.innerText = '';
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidCPF = (cpf) => cpf.length === 14; 
    const isValidCEP = (cep) => cep.length === 9;
    const isValidPhone = (phone) => phone.length === 15;

    const initFormValidation = () => {
        const form = document.getElementById('registration-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            let isValid = true;

            document.querySelectorAll('.error-text').forEach(el => el.innerText = '');
            document.querySelectorAll('.form-control').forEach(el => el.classList.remove('is-invalid'));

            const nome = document.getElementById('nome');
            if (nome.value.trim() === '') {
                showError('nome', 'O nome completo é obrigatório.');
                isValid = false;
            }

            const email = document.getElementById('email');
            if (email.value.trim() === '') {
                showError('email', 'O e-mail é obrigatório.');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError('email', 'Por favor, insira um e-mail válido.');
                isValid = false;
            }
            
            const cpf = document.getElementById('cpf');
            if (!isValidCPF(cpf.value)) {
                showError('cpf', 'O CPF deve ter 11 dígitos.');
                isValid = false;
            }
            
            const cep = document.getElementById('cep');
            if (!isValidCEP(cep.value)) {
                showError('cep', 'O CEP deve ter 8 dígitos.');
                isValid = false;
            }
            
            const telefone = document.getElementById('telefone');
            if (!isValidPhone(telefone.value)) {
                showError('telefone', 'O telefone deve ter 11 dígitos.');
                isValid = false;
            }

            if (isValid) {
                alert('Cadastro enviado com sucesso!');
                // form.submit(); // Descomente para enviar de verdade
            }
        });
    };


    /* ======================================================
       FUNCIONALIDADE 4: MÁSCARAS DE FORMULÁRIO
    ====================================================== */
    
    const initMasks = () => {
        const inputCPF = document.getElementById('cpf');
        if (inputCPF) inputCPF.addEventListener('input', formatarCPF);
        
        const inputTelefone = document.getElementById('telefone');
        if (inputTelefone) inputTelefone.addEventListener('input', formatarTelefone);

        const inputCEP = document.getElementById('cep');
        if (inputCEP) inputCEP.addEventListener('input', formatarCEP);
    };

    function formatarCPF(e) {
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = v.slice(0, 14); // Limita o tamanho
    }
    function formatarTelefone(e) {
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = v.slice(0, 15); // Limita o tamanho
    }
    function formatarCEP(e) {
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = v.slice(0, 9); // Limita o tamanho
    }


    /* ======================================================
       INICIALIZAÇÃO GERAL
    ====================================================== */
    
    function initializePageScripts() {
        const path = window.location.pathname;

        if (path.endsWith('/') || path.endsWith('index.html')) {
            renderProjects();
        } 
        
        if (path.endsWith('projetos.html')) {
            renderProjects();
        } 
        
        if (path.endsWith('cadastro.html')) {
            initMasks();
            initFormValidation();
        }
    }

    // --- RODA TUDO QUANDO A PÁGINA CARREGA ---
    initializePageScripts(); 

});