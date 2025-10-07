// Validação de Campos obrigatórios do Formulário de Contato!
function ValidarCamposFormulario(){
    if(document.formContato.nome.value == ""){
        alert('Preencha o campo obrigatório NOME!');
        document.formContato.nome.focus();
        return false;
    }

    if(document.formContato.email.value == ""){
        alert('Preencha o campo obrigatório E-MAIL!');
        document.formContato.email.focus();
        return false;
    }

    if(document.formContato.telefone.value == ""){
        alert('Preencha o campo obrigatório TELEFONE!');
        document.formContato.telefone.focus();
        return false;
    }

    if(document.formContato.ass.value == ""){
        alert('Preencha o campo obrigatório ASSUNTO!');
        document.formContato.ass.focus();
        return false;
    }

    if(document.formContato.msg.value == ""){
        alert('Preencha o campo obrigatório MENSAGEM!');
        document.formContato.msg.focus();
        return false;
    }
}