
let txtCliente = document.querySelector('#txtCliente');
let txtLivro = document.querySelector('#txtLivro');
let txtRetirada = document.querySelector('#txtRetirada');
let txtReserva = document.querySelector('#txtReserva');

let btnConfirmar = document.querySelector('#btnConfirmar');

var xhr = new XMLHttpRequest();

txtReserva.value = getData(0);
txtRetirada.value = getData(7);

txtReserva.readOnly = true;
txtRetirada.readOnly = true;
txtLivro.readOnly = true;
txtCliente.readOnly = true;

btnConfirmar.addEventListener('click', function () { //busca livros 

    let erro = document.querySelector("#form-erro");
    let sucesso = document.querySelector("#form-sucesso");

    //envia a requisição
    let url = '../controle/controle_reserva.php';
    let params = 'op=salvar&id_livro=' + txtLivro.value + '&id_cliente=' + txtCliente.value + '&data_reserva=' + txtReserva.value + '&data_retirada=' + txtRetirada.value;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);

    erro.style = 'display: none';
    sucesso.style = 'display: none';

})

xhr.addEventListener("load", function () {
    let erro = document.querySelector("#form-erro");
    let sucesso = document.querySelector("#form-sucesso");
    if (this.responseText.trim().indexOf('Sucesso') > -1) {
        erro.style = 'display: none';
        sucesso.style = 'display: initial';
        window.location.replace('inicio.php');
    } else {
        erro.textContent = 'Erro ao reserva livro';
        erro.style = 'display: initial';
    }
});

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

function getData(dias) {
    var now;
    if (dias > 0)
        now = addDias(dias);
    else
        now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear() + "-" + (month) + "-" + (day);

    return today;
}

function addDias(dias) {
    time = new Date();
    var outraData = new Date();
    outraData.setDate(time.getDate() + dias); // Adiciona 3 dias

    return outraData;
}
