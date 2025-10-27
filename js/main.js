document.addEventListener('DOMContentLoaded', function() {

    // --- FUNÇÕES DE MÁSCARA (Para cadastro.html) ---
    const inputCPF = document.getElementById('cpf');
    if (inputCPF) {
        inputCPF.addEventListener('input', formatarCPF);
    }
    
    const inputTelefone = document.getElementById('telefone');
    if (inputTelefone) {
        inputTelefone.addEventListener('input', formatarTelefone);
    }

    const inputCEP = document.getElementById('cep');
    if (inputCEP) {
        inputCEP.addEventListener('input', formatarCEP);
    }

    // Função para formatar CPF: 000.000.000-00
    function formatarCPF(e) {
        let valor = e.target.value.replace(/\D/g, ''); 
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); 
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = valor;
    }

    // Função para formatar Telefone: (00) 00000-0000
    function formatarTelefone(e) {
        let valor = e.target.value.replace(/\D/g, '');
        valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = valor;
    }

    // Função para formatar CEP: 00000-000
    function formatarCEP(e) {
        let valor = e.target.value.replace(/\D/g, '');
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = valor;
    }

});