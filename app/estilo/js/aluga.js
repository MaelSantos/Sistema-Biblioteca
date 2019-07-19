var erro = $("#form-erro");
var sucesso = $("#form-sucesso");
erro.hide()
sucesso.hide()

let datLocacao = $('#datLocacao');
let datDevolucao = $('#datDevolucao');
let txtDiaria = $('#txtDiaria');

datLocacao.val(getData(0));
datDevolucao.val(getData(7));
txtDiaria.val('10');

//desabilito os campos
datDevolucao.readOnly = true;
datLocacao.readOnly = true;
txtDiaria.readOnly = true;

$('#btnCadastrar').click(function () {

    if (validar()) {
        let datLocacao = $('#datLocacao').val().trim();
        let datDevolucao = $('#datDevolucao').val().trim();
        let txtDiaria = $('#txtDiaria').val().trim();
        let txtLivro = $('#txtLivro').val().trim();
        let txtCliente = $('#txtCliente').val().trim();

        $.ajax({
            method: 'POST',
            url: '/Locação/Alugar/',
            data: { data_locacao: datLocacao, data_devolucao: datDevolucao, diaria: txtDiaria, id_cliente: txtCliente, id_livro: txtLivro },
            success: function (respostas) {
                erro.hide()
                sucesso.show()

                $('#datLocacao').val(getData(0));
                $('#datDevolucao').val(getData(7));
                $('#txtDiaria').val('');
                $('#txtLivro').val('');
                $('#txtCliente').val('');
            },
            error: function () {
                sucesso.hide()
                erro.show()
            }
        })

    } else {
        sucesso.hide();
        erro.show();
    }
});

function validar() {

    let datLocacao = $('#datLocacao').val().trim();
    let datDevolucao = $('#datDevolucao').val().trim();
    let txtDiaria = $('#txtDiaria').val().trim();
    let txtLivro = $('#txtLivro').val().trim();
    let txtCliente = $('#txtCliente').val().trim();

    if (datLocacao == '')
        return false;
    else if (datDevolucao == '')
        return false;
    else if (txtDiaria == '')
        return false;
    else if (txtLivro == '')
        return false;
    else if (txtCliente == '')
        return false;

    return true;

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
