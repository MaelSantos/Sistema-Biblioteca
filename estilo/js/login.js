let erro = $("#form-erro");
erro.hide()

function validar() {

    let txtLogin = $('#txtLogin').val().trim()
    let txtSenha = $('#txtSenha').val().trim()

    if (txtLogin == '')
        return false;
    else if (txtSenha == '')
        return false;

    return true;

}


$('#btnEntrar').click(function () {

    if (validar()) {
        let txtLogin = $('#txtLogin').val().trim()
        let txtSenha = $('#txtSenha').val().trim()

        $.ajax({
            method: 'POST',
            url: '/Logar/',
            data: { login: txtLogin, senha: txtSenha },
            success: function (resposta) {
                resposta = JSON.parse(resposta)
                if (resposta['tipo'] == 'cliente')
                    sessionStorage.setItem('logado', txtLogin);
                else if (resposta['tipo'] == 'funcionario')
                    sessionStorage.setItem('admin', txtLogin);

                $(location).attr('href', '/Cliente/');
            },
            error: function (resposta) {
                erro.show()
            }
        })

    } else {
        erro.show()
    }
});
