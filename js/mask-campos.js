// Máscaras de Formulário com Javascript Nativo.
function MascaraTelefone(campo){
    let valor = campo.value.replace(/\D/g, "");

    if(valor.length > 11) valor = valor.slice(0, 11);

    if(valor.length > 10){
        campo.value = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }else if (valor.length > 6){
        campo.value = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }else if (valor.length > 2){
        campo.value = valor.replace(/(\d{2})(\d{0,5})/ , "($1) $2");
    }else {
        campo.value = valor.replace(/(\d*)/, "($1");
    }
}

function ValidarEmail(campo){
    const email = campo.value.trim();
    const erro = document.getElementById('erroEmail');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email !== '' && !regex.test(email)){
        erro.style.display = 'inline';
    }else{
        erro.style.display = 'none';
    }
}