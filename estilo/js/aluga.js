let datLocacao = document.querySelector('#datLocacao');
let datDevolucao = document.querySelector('#datDevolucao');
let txtDiaria = document.querySelector('#txtDiaria');
let btnCadastrar = document.querySelector('#btnCadastrar');

datLocacao.value = getData(0);
datDevolucao.value = getData(7);
txtDiaria.value = '10';

//desabilito os campos
datDevolucao.readOnly = true;
datLocacao.readOnly = true;
txtDiaria.readOnly = true;

var xhr = new XMLHttpRequest();
var erro = document.querySelector("#form-erro");
var sucesso = document.querySelector("#form-sucesso");

btnCadastrar.addEventListener('click', function(){

    if(validar())
    {
        let datLocacao = document.querySelector('#datLocacao').value.trim();
        let datDevolucao = document.querySelector('#datDevolucao').value.trim();
        let txtDiaria = document.querySelector('#txtDiaria').value.trim();
        let txtLivro = document.querySelector('#txtLivro').value.trim();
        let txtCliente = document.querySelector('#txtCliente').value.trim();
        let txtFuncionario = document.querySelector('#txtFuncionario').value.trim();
        
        sucesso.style = 'display: none';

        let url = '../controle/controle_aluga.php';
        let params = 'op=salvar&data_locacao='+datLocacao+'&data_devolucao='+datDevolucao+'&diaria='+txtDiaria+'&id_funcionario='+txtFuncionario+'&id_cliente='+txtCliente+'&id_livro='+txtLivro;
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
        document.querySelector('#datLocacao').value = getData(0);
        document.querySelector('#datDevolucao').value = getData(7);
        document.querySelector('#txtDiaria').value = '';
        document.querySelector('#txtLivro').value = '';
        document.querySelector('#txtCliente').value = '';
        document.querySelector('#txtFuncionario').value = '';

        erro.style = 'display: none';
        sucesso.style = 'display: initial';

    } else {
        erro.textContent = 'Erro ao Cadastrar';
        erro.style = 'display: initial';
    }
});

function validar(){

    let datLocacao = document.querySelector('#datLocacao').value.trim();
    let datDevolucao = document.querySelector('#datDevolucao').value.trim();
    let txtDiaria = document.querySelector('#txtDiaria').value.trim();
    let txtLivro = document.querySelector('#txtLivro').value.trim();
    let txtCliente = document.querySelector('#txtCliente').value.trim();
    let txtFuncionario = document.querySelector('#txtFuncionario').value.trim();

    if(datLocacao == '')
        return false;
    else if(datDevolucao == '')
        return false;
    else if(txtDiaria == '')
        return false;
    else if(txtLivro == '')
        return false;
    else if(txtCliente == '')
        return false;
    else if(txtFuncionario == '')
        return false;
    
    return true;

}

function getData(dias)
{
    var now;
    if(dias > 0)
        now = addDias(dias);
    else
        now = new Date();
 
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear()+"-"+(month)+"-"+(day);

    console.log(today);

    return today;
}

function addDias(dias)
{
    time = new Date();
    var outraData = new Date();
    outraData.setDate(time.getDate() + dias); // Adiciona 3 dias

    return outraData;
}
