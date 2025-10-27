// Aguarda o conteúdo da página carregar antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona os campos pelos IDs
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    if (inputCPF) {
        inputCPF.addEventListener('input', formatarCPF);
    }
    
    if (inputTelefone) {
        inputTelefone.addEventListener('input', formatarTelefone);
    }

    if (inputCEP) {
        inputCEP.addEventListener('input', formatarCEP);
    }

    // Função para formatar CPF: 000.000.000-00
    function formatarCPF(e) {
        let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
        
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto após 3 primeiros dígitos
        valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto após 3 próximos dígitos
        valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona hífen antes dos 2 últimos dígitos
        
        e.target.value = valor;
    }

    // Função para formatar Telefone: (00) 00000-0000
    function formatarTelefone(e) {
        let valor = e.target.value.replace(/\D/g, '');
        
        valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses nos dois primeiros dígitos
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen após os 5 primeiros dígitos (para celular)
        
        e.target.value = valor;
    }

    // Função para formatar CEP: 00000-000
    function formatarCEP(e) {
        let valor = e.target.value.replace(/\D/g, '');
        
        valor = valor.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen após os 5 primeiros dígitos
        
        e.target.value = valor;
    }

});