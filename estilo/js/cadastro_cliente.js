

let erro = $("#form-erro");
let sucesso = $("#form-sucesso");
erro.hide()
sucesso.hide()

function validar() {

    let txtNome = $('#txtNome').val().trim();
    let txtCpf = $('#txtCPF').val().trim();
    let txtEmail = $('#txtEmail').val().trim();
    let txtTelefone = $('#txtTelefone').val().trim();
    let txtLogin = $('#txtLogin').val().trim();
    let txtSenha = $('#txtSenha').val().trim();
    let txtConfirmaSenha = $('#txtConfirmaSenha').val().trim();

    if (txtNome == '' || txtNome.length < 3)
        return false;
    else if (txtCpf == '' || txtCpf.length < 3)
        return false;
    else if (txtEmail == '' || txtEmail.length < 3)
        return false;
    else if (txtTelefone == '' || txtTelefone.length < 3)
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
        let txtCpf = $('#txtCPF').val().trim();
        let txtEmail = $('#txtEmail').val().trim();
        let txtTelefone = $('#txtTelefone').val().trim();
        let txtLogin = $('#txtLogin').val().trim();
        let txtSenha = $('#txtSenha').val().trim();

        $.ajax({
            method: 'POST',
            url: '/Cliente/Cadastrar/',

            data: { nome: txtNome, cpf: txtCpf, email: txtEmail, telefone: txtTelefone, login: txtLogin, senha: txtSenha },
            success: function () {

                $('#txtNome').val('');
                $('#txtCPF').val('');
                $('#txtEmail').val('');
                $('#txtTelefone').val('');
                $('#txtLogin').val('');
                $('#txtSenha').val('');
                $('#txtConfirmaSenha').val('');

                sucesso.show()
                erro.hide()
            },
            error: function () {
                erro.show()
                sucesso.hide()
            }
        })

    } else {
        erro.show()
    }
})