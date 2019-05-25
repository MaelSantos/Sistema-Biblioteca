
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

    let erro = document.querySelector("#form-erro");

    if(validar())
    {
        let txtLogin = document.querySelector('#txtLogin').value.trim();
        let txtSenha = document.querySelector('#txtSenha').value.trim();

        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function() {
            if (this.responseText.trim() == 'Sucesso') {
                window.location.replace('inicio.php');

            } else {
                erro.textContent = 'Erro ao Realizar Login';
                erro.style = 'display: initial';
            }
        });

        let url = '../controle/controle_cliente.php';
        let params = 'op=login&nome=0&cpf=0&email='+txtLogin+'&telefone=0&login='+txtLogin+'&senha='+txtSenha;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);

        // xhr.onreadystatechange = function() {//Call a function when the state changes.
        //     if(xhr.readyState == 4 && xhr.status == 200) {
        //         alert(xhr.responseText);
        //     }
        // }

    }else {
        erro.textContent = 'Dados invalidos, repetidos ou faltando';
        erro.style = 'display: initial';
    }
})