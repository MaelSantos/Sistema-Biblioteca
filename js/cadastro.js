
let btnCadastrar = document.querySelector('#btnCadastrar')

function validar(){

    let txtLogin = document.querySelector('#txtLogin')
    let txtEmail = document.querySelector('#txtEmail')
    let txtSenha = document.querySelector('#txtSenha')
    let txtConfirmaSenha = document.querySelector('#txtConfirmaSenha')

    if(txtLogin.value.trim() == '' || txtLogin.value.trim().length < 3)
        return false;
    else if(txtEmail.value.trim() == '' || txtEmail.value.trim().length < 3)
        return false;
    else if(txtSenha.value.trim() == '' || txtSenha.value.trim().length < 3)
        return false;
    else if(txtConfirmaSenha.value.trim() == '' || txtConfirmaSenha.value.trim().length < 3)
        return false;
    else if(txtSenha.value.trim() != txtConfirmaSenha.value.trim())
        return false;
    
        return true;

}

btnCadastrar.addEventListener('click', function() {

    if(validar())
    {
        let txtLogin = document.querySelector('#txtLogin').value.trim();
        let txtEmail = document.querySelector('#txtEmail').value.trim();
        let txtSenha = document.querySelector('#txtSenha').value.trim();
        
        xhr.open("POST", "http://localhost/Sistema-Biblioteca/php/salvar.php?login="+txtLogin+"&email="+txtEmail+"&senha="+txtSenha);
        xhr.send();
    }

})