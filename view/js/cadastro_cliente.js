
let btnCadastrar = document.querySelector('#btnCadastrar')

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

    if(validar())
    {
        let txtNome = document.querySelector('#txtNome').value.trim();
        let txtCpf = document.querySelector('#txtCPF').value.trim();
        let txtEmail = document.querySelector('#txtEmail').value.trim();
        let txtTelefone = document.querySelector('#txtTelefone').value.trim();
        let txtLogin = document.querySelector('#txtLogin').value.trim();
        let txtSenha = document.querySelector('#txtSenha').value.trim();
        
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function() {
            console.log(this.responseText.trim());
            if (this.responseText.trim() == 'Sucesso') {
                window.alert('Cliente Cadastrado');
                
                // limpando o formulário
                document.querySelector('#txtNome').value = "";
                document.querySelector('#txtCPF').value = "";
                document.querySelector('#txtEmail').value = "";
                document.querySelector('#txtTelefone').value = "";
                document.querySelector('#txtLogin').value = "";
                document.querySelector('#txtSenha').value = "";
                document.querySelector('#txtConfirmaSenha').value = "";

            } else {
                window.alert('Erro ao Cadastrar');
            }
        });

        xhr.open('GET', 'http://localhost/Sistema-Biblioteca/controle/controle_cliente.php?op=salvar&nome='+txtNome+'&cpf='+txtCpf+'&email='+txtEmail+'&telefone='+txtTelefone+'&login='+txtLogin+'&senha='+txtSenha);
        xhr.send();

    }
})