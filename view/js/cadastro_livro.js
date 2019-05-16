
let btnCadastrar = document.querySelector('#btnCadastrar')

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
        
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", function() {
            console.log(this.responseText.trim());
            if (this.responseText.trim() == 'Sucesso') {
                window.alert('Cliente Cadastrado');
                
                // limpando o formulário
                let txtTitulo = document.querySelector('#txtTitulo').value = '';
                let txtAutor = document.querySelector('#txtAutor').value = '';
                let txtAno = document.querySelector('#txtAno').value = '';
                let txtEditora = document.querySelector('#txtEditora').value = '';
                let txtCodigo = document.querySelector('#txtCodigo').value = '';
                let txtQuantidade = document.querySelector('#txtQuantidade') = '';

            } else {
                window.alert('Erro ao Cadastrar');
            }
        });

        xhr.open('GET', 'http://localhost/Sistema-Biblioteca/controle/controle_livro.php?op=salvar&autor='+txtAutor+'&titulo='
        +txtTitulo+'&ano='+txtAno+'&editora='+txtEditora+'&codigo='+txtCodigo+'&quantidade='+txtQuantidade+'&disponivel='+txtQuantidade);
        xhr.send();

    }
})