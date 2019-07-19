
let erro = $('#form-erro');
let sucesso = $('#form-sucesso');
erro.hide()
sucesso.hide()

function validar() {

    let txtNome = $('#txtNome').val().trim();
    let txtCargo = $('#txtCargo').val().trim();
    let txtEmail = $('#txtEmail').val().trim();
    let txtLogin = $('#txtLogin').val().trim();
    let txtSenha = $('#txtSenha').val().trim();
    let txtConfirmaSenha = $('#txtConfirmaSenha').val().trim();

    if (txtNome == '' || txtNome.length < 3)
        return false;
    else if (txtCargo == '' || txtCargo.length < 3)
        return false;
    else if (txtEmail == '' || txtEmail.length < 3)
        return false;
    else if (txtLogin == '' || txtLogin.length < 3)
        return false;
    else if (txtSenha == '' || txtSenha.length < 3)
        return false;
    else if (txtConfirmaSenha == '' || txtConfirmaSenha.length < 3)
        return false;
    else if (txtSenha != txtConfirmaSenha)
        return false;

    return true;

}

$('#btnCadastrar').click(function () {

    if (validar()) //valida se todos os campos estão preenchidos
    {
        let txtNome = $('#txtNome').val().trim();
        let txtCargo = $('#txtCargo').val().trim();
        let txtEmail = $('#txtEmail').val().trim();
        let txtLogin = $('#txtLogin').val().trim();
        let txtSenha = $('#txtSenha').val().trim();

        $.ajax({
            method: 'POST',
            url: '/Funcionario/Cadastrar/',
            data: { nome: txtNome, cargo: txtCargo, email: txtEmail, login: txtLogin, senha: txtSenha },
            success: function (resposta) {
                sucesso.show()
                erro.hide()

                $('#txtNome').val('');
                $('#txtCargo').val('');
                $('#txtEmail').val('');
                $('#txtLogin').val('');
                $('#txtSenha').val('');
                $('#txtConfirmaSenha').val('');
            },
            error: function (resposta) {
                erro.show()
                sucesso.hide()
            }
        })


    } else {
        erro.show()
        sucesso.hide()
    }
})