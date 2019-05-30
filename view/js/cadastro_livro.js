
let btnCadastrar = document.querySelector('#btnCadastrar')

var erro = document.querySelector("#form-erro");
var sucesso = document.querySelector("#form-sucesso");

var xhr = new XMLHttpRequest();

function validar(){

    let txtTitulo = document.querySelector('#txtTitulo').value.trim();
    let txtAutor = document.querySelector('#txtAutor').value.trim();
    let txtAno = document.querySelector('#txtAno').value.trim();
    let txtEditora = document.querySelector('#txtEditora').value.trim();
    let txtCodigo = document.querySelector('#txtCodigo').value.trim();
    let txtQuantidade = document.querySelector('#txtQuantidade').value.trim();

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

btnCadastrar.addEventListener('click', function() {

    if(validar())
    {
        let txtTitulo = document.querySelector('#txtTitulo').value.trim();
        let txtAutor = document.querySelector('#txtAutor').value.trim();
        let txtAno = document.querySelector('#txtAno').value.trim();
        let txtEditora = document.querySelector('#txtEditora').value.trim();
        let txtCodigo = document.querySelector('#txtCodigo').value.trim();
        let txtQuantidade = document.querySelector('#txtQuantidade').value.trim();
        
        sucesso.style = 'display: none';

        let url = '../controle/controle_livro.php';
        let params = 'op=salvar&autor='+txtAutor+'&titulo='
        +txtTitulo+'&ano='+txtAno+'&editora='+txtEditora+'&codigo='+txtCodigo+'&quantidade='+txtQuantidade+'&disponivel='+txtQuantidade;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
        
    }else {
        erro.textContent = 'Dados invalidos, repetidos ou faltando';
        erro.style = 'display: initial';
    }
});

xhr.addEventListener("load", function() {
    console.log(this.responseText.trim());
    if (this.responseText.trim() == 'Sucesso') {
        
        // limpando o formulário
        document.querySelector('#txtTitulo').value = '';
        document.querySelector('#txtAutor').value = '';
        document.querySelector('#txtAno').value = '';
        document.querySelector('#txtEditora').value = '';
        document.querySelector('#txtCodigo').value = '';
        document.querySelector('#txtQuantidade') = '';

        erro.style = 'display: none';
        sucesso.style = 'display: initial';

    } else {
        erro.textContent = 'Erro ao cadastrar';
        erro.style = 'display: initial';
    }
});
