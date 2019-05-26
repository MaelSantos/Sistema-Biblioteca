
let btnCadastrar = document.querySelector('#btnCadastrar');


function validar(){

    let txtNome = document.querySelector('#txtNome').value.trim();
    let txtCpf = document.querySelector('#txtCPF').value.trim();
    let txtEmail = document.querySelector('#txtEmail').value.trim();
    let txtTelefone = document.querySelector('#txtTelefone').value.trim();
    let txtLogin = document.querySelector('#txtLogin').value.trim();
    let txtSenha = document.querySelector('#txtSenha').value.trim();
    let txtConfirmaSenha = document.querySelector('#txtConfirmaSenha').value.trim();

    if(txtNome == '' || txtNome.length < 3)
        return false;
    else if(txtCpf == '' || txtCpf.length < 3)
        return false;
    else if(txtEmail == '' || txtEmail.length < 3)
        return false;
    else if(txtTelefone == '' || txtTelefone.length < 3)
        return false;
    else if(txtLogin == '' || txtLogin.length < 3)
        return false;
    else if(txtSenha == '' || txtSenha.length < 3)
        return false;
    else if(txtConfirmaSenha == '' || txtConfirmaSenha.length < 3)
        return false;
    else if(txtSenha != txtConfirmaSenha)
        return false;
    
    return true;

}

btnCadastrar.addEventListener('click', function() {

    let erro = document.querySelector("#form-erro");
    let sucesso = document.querySelector("#form-sucesso");
    
    if(validar()) //valida se todos os campos estão preenchidos
    {
        let txtNome = document.querySelector('#txtNome').value.trim();
        let txtCpf = document.querySelector('#txtCPF').value.trim();
        let txtEmail = document.querySelector('#txtEmail').value.trim();
        let txtTelefone = document.querySelector('#txtTelefone').value.trim();
        let txtLogin = document.querySelector('#txtLogin').value.trim();
        let txtSenha = document.querySelector('#txtSenha').value.trim();

        sucesso.style = 'display: none';
        
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function() {
            console.log(this.responseText.trim());
            if (this.responseText.trim() == 'Sucesso') {
                
                // limpando o formulário
                document.querySelector('#txtNome').value = "";
                document.querySelector('#txtCPF').value = "";
                document.querySelector('#txtEmail').value = "";
                document.querySelector('#txtTelefone').value = "";
                document.querySelector('#txtLogin').value = "";
                document.querySelector('#txtSenha').value = "";
                document.querySelector('#txtConfirmaSenha').value = "";

                erro.style = 'display: none';
                sucesso.style = 'display: initial';

            } else {
                erro.textContent = 'Erro ao Cadastrar';
                erro.style = 'display: initial';
            }
        });
            
        let url = '../controle/controle_cliente.php';
        let params = 'op=salvar&nome='+txtNome+'&cpf='+txtCpf+'&email='+txtEmail+'&telefone='+txtTelefone+'&login='+txtLogin+'&senha='+txtSenha;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);

    }else {
        erro.textContent = 'Dados invalidos, repetidos ou faltando';
        erro.style = 'display: initial';
    }
})