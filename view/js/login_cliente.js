
let btnEntrar = document.querySelector('#btnEntrar')

function validar(){

    let txtLogin = document.querySelector('#txtLogin').value.trim();
    let txtSenha = document.querySelector('#txtSenha').value.trim();

    if(txtLogin == '')
        return false;
    else if(txtSenha == '')
        return false;
    
    return true;

}

btnEntrar.addEventListener('click', function() {

    if(validar())
    {
        let txtLogin = document.querySelector('#txtLogin').value.trim();
        let txtSenha = document.querySelector('#txtSenha').value.trim();
        
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function() {
            console.log(this.responseText.trim());
            if (this.responseText.trim() == 'Sucesso') {
                window.alert('Cliente Cadastrado');
                
                // limpando o formulário
                document.querySelector('#txtLogin').value = "";
                document.querySelector('#txtSenha').value = "";

            } else {
                window.alert('Erro ao Cadastrar');
            }
        });

        xhr.open('GET', 'http://localhost/Sistema-Biblioteca/controle/controle_cliente.php?op=buscar&nome=0&cpf=0&email='+txtLogin+'&telefone=0&login='+txtLogin+'&senha='+txtSenha);
        xhr.send();

    }
})