let lblCliente = document.querySelector('#lblCliente');
let lblLivro = document.querySelector('#lblLivro');
let lblRetirada = document.querySelector('#lblRetirada');
let lblReserva = document.querySelector('#lblReserva');
let btnConfirmar = document.querySelector('#btnConfirmar');

var xhr = new XMLHttpRequest();

var cookie = getCookie('Codigo');
lblLivro.innerHTML = 'Livro: '+cookie;
// lblCliente.innerHTML = 'Cliente: '+getCookie('logado')
data = new Date('2019-03-09');
lblReserva.innerHTML = 'Data de Reserva: '+data.getDay()+'/'+data.getMonth()+'/'+data.getFullYear();
lblRetirada.innerHTML = 'Data de Retirada: '+(data.getDay()+2)+'/'+data.getMonth()+'/'+data.getFullYear();

btnConfirmar.addEventListener('click', function() { //busca livros 
        
        let erro = document.querySelector("#form-erro");
        
        //envia a requisição
        let url = '../controle/controle_reserva.php';
        let params = 'op=salvar&id_livro='+cookie;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
        
        erro.style = 'display: none';

})

xhr.addEventListener("load", function() {
    let erro = document.querySelector("#form-erro");
    if (this.responseText.trim() == 'Sucesso') {
        // window.location.replace('inicio.html');
        window.alert('Sucesso')
    } else {
        erro.textContent = 'Erro ao reserva livro';
        erro.style = 'display: initial';
    }
});

xhr.onreadystatechange = function() {//Call a function when the state changes.
            if(xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        }

function getCookie(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);

    if (begin == -1) {

        begin = cookies.indexOf(prefix);
        
        if (begin != 0) {
            return null;
        }

    } else {
        begin += 2;
    }

    var end = cookies.indexOf(";", begin);
    
    if (end == -1) {
        end = cookies.length;                        
    }

    return unescape(cookies.substring(begin + prefix.length, end));
}

function deleteCookie(name) {
    if (getCookie(name)) {
        document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}
