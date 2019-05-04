let btnCadastrar = document.querySelector('btnCadastrar')

function validar(){

    let txtLogin = document.querySelector('txtLogin')
    let txtEmail = document.querySelector('txtEmail')
    let txtSenha = document.querySelector('txtSenha')
    let txtConfirmaSenha = document.querySelector('txtConfirmaSenha')

    if(txtLogin.textContent == "" || txtLogin.textContent.length < 3)
        return false;
    else if(txtEmail.textContent == "" || txtEmail.textContent.length < 3)
        return false;
    else if(txtSenha.textContent == "" || txtSenha.textContent.length < 3)
        return false;
    else if(txtConfirmaSenha.textContent == "" || txtConfirmaSenha.textContent.length < 3)
        return false;
    else if(txtSenha.textContent != txtConfirmaSenha.textContent)
        return false;

}

btnCadastrar.addEventListener('click', function(){
    console.log(validar());
})