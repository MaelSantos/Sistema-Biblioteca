var erro = $("#form-erro");
var sucesso = $("#form-sucesso");

erro.hide()
sucesso.hide()

function validar(){

    let txtTitulo = $('#txtTitulo').val().trim();
    let txtAutor = $('#txtAutor').val().trim();
    let txtAno = $('#txtAno').val().trim();
    let txtEditora = $('#txtEditora').val().trim();
    let txtCodigo = $('#txtCodigo').val().trim();
    let txtQuantidade = $('#txtQuantidade').val().trim();

    if(txtTitulo == '')
        return false;
    else if(txtAutor == '')
        return false;
    else if(txtAno == '' || txtAno.length < 3)
        return false;
    else if(txtEditora == '')
        return false;
    else if(txtCodigo == '')
        return false;
    else if(txtQuantidade == '')
        return false;
    
    return true;

}

$('#btnCadastrar').click(function() {

    if(validar())
    {
        let txtTitulo = $('#txtTitulo').val().trim();
        let txtAutor = $('#txtAutor').val().trim();
        let txtAno = $('#txtAno').val().trim();
        let txtEditora = $('#txtEditora').val().trim();
        let txtCodigo = $('#txtCodigo').val().trim();
        let txtQuantidade = $('#txtQuantidade').val().trim();
        
        erro.hide()
        sucesso.show()

        $.ajax({
            method: 'POST',
            url: '/Livro/Cadastrar/',
            data: {autor : txtAutor, titulo : txtTitulo, ano : txtAno, editora : txtEditora, codigo : txtCodigo, quantidade : txtQuantidade, disponivel : txtQuantidade},
            success: function(respostas){
                erro.hide()
                sucesso.show()

                $('#txtTitulo').val('');
                $('#txtAutor').val('');
                $('#txtAno').val('');
                $('#txtEditora').val('');
                $('#txtCodigo').val('');
                $('#txtQuantidade').val('');
            },
            error: function(){
                sucesso.hide()
                erro.show()
            }
         })
        
    }else {
        sucesso.hide()
        erro.show()
    }
});