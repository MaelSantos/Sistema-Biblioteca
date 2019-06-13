let erro = $("#form-erro");
erro.hide()

function validar(){

    let txtLogin = $('#txtLogin').val()
    let txtSenha = $('#txtSenha').val()

    if(txtLogin == '')
        return false;
    else if(txtSenha == '')
        return false;

    return true;

}


$('#btnEntrar').click(function(){

        if(validar())
        {
            let txtLogin = $('#txtLogin').val()
            let txtSenha = $('#txtSenha').val()

            $.ajax({
                method: 'POST',
                url: '/Logar/',
                data: {login: txtLogin, senha: txtSenha },
                success: function(){
                    $(location).attr('href', '/Cliente/');
                    //sessionStorage.setItem('logado', txtLogin);
                erro.hide()
                },
                error: function(){
                    erro.show()
                }
             })

        }else {
            erro.show()
        }
});
