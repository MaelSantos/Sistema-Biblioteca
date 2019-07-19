let erro = $("#form-erro");
let sucesso = $("#form-sucesso");
erro.hide();
sucesso.hide();

let txtCliente = $('#txtCliente').attr('readonly', true);
let txtLivro = $('#txtLivro').attr('readonly', true);
let txtRetirada = $('#txtRetirada').attr('readonly', true);
let txtReserva = $('#txtReserva').attr('readonly', true);

txtReserva.val(getData(0));
txtRetirada.val(getData(7));

$('#btnConfirmar').click(function () { //busca livros 

    $.ajax({
        method: 'POST',
        url: '/Livro/Reservar/',

        data: { id_livro: txtLivro.val(), id_cliente: txtCliente.val(), data_reserva: txtReserva.val(), data_retirada: txtRetirada.val() },
        success: function () {
            $(location).attr('href', '/Livro/Acervo/');
            erro.hide()
            sucesso.show()
        },
        error: function () {
            sucesso.hide()
            erro.show()
        }
    })
})

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
