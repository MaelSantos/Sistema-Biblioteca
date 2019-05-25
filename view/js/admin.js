
let btnBuscar = document.querySelector('#btnBuscar');
let btnCadastrarFuncionario = document.querySelector('#btnCadastrarFuncionario');
let btnCadastrarLivro = document.querySelector('#btnCadastrarLivro');
let btnAlugar = document.querySelector('#btnAlugar');

var xhr = new XMLHttpRequest();

var cbxTipo = document.querySelector('#cbxTipo');

xhr.addEventListener('load', function() {//retornar os resultados da busca para a tela
    let resultado = JSON.parse(this.responseText.trim());//passa para uma lista os arquivos do JSON

    let tr = document.querySelectorAll('.tabela > tbody > tr');
    for(let i = 0; i < tr.length; i++)
        tr[i].remove() //remove elementos existentes na tabela
    
    let th = document.querySelectorAll('.tabela > thead > tr');
    if(th != null)
        for(let i = 0; i < th.length; i++)
            th[i].remove() //remove elementos existentes na tabela
    
    if(cbxTipo.options[cbxTipo.selectedIndex].value == 'cliente'){
        
        let cabecalho = '<tr>';
        cabecalho += '<th>Nome</th>';
        cabecalho += '<th>Login</th>';
        cabecalho += '<th>Email</th>';
        cabecalho += '<th>Cpf</th>';
        cabecalho += '<th>Telefone</th>';
        cabecalho += '<th>Opções</th>';
        cabecalho += '</tr>';

        document.querySelector('.tabela > thead').insertAdjacentHTML('beforeend', cabecalho);//adiciona o cabeçalho

        for(let i = 0; i < resultado.length; i++)
        {

            //prepara os dados a serem adicionados
            let txtHtml;
            if(i % 2 == 0)
                txtHtml = "<tr class='dif'>";
            else
                txtHtml = "<tr>";
            txtHtml += "<td class='col_nome'>"+resultado[i]["nome"]+"</td>";
            txtHtml += "<td class='col_login'>"+resultado[i]["login"]+"</td>";
            txtHtml += "<td class='col_email'>"+resultado[i]["email"]+"</td>";
            txtHtml += "<td class='col_cpf'>"+resultado[i]["cpf"]+"</td>";
            txtHtml += "<td class='col_telefone'>"+resultado[i]["telefone"]+"</td>";
            txtHtml += "<td><a class='detalhes' href='javascript:void(0)'>Detalhes</a></td>";
            txtHtml += "</tr>";

            let tbody = document.querySelector('.tabela > tbody');
            tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos
            let ultimaLinha = tbody.querySelector('tr:last-child');
            let detalhes = ultimaLinha.querySelector('.detalhes');

            detalhes.addEventListener('click', function detalhes(){
                // let cookie = ultimaLinha.querySelector('.col_codigo').textContent;
                // document.cookie = 'Codigo='+resultado[i]["id"];
                // window.location.replace('reserva.php');
        });
    }

    }
    else if(cbxTipo.options[cbxTipo.selectedIndex].value == 'funcionario'){
        let cabecalho = '<tr>';
        cabecalho += '<th>Nome</th>';
        cabecalho += '<th>Login</th>';
        cabecalho += '<th>Email</th>';
        cabecalho += '<th>Cargo</th>';
        cabecalho += '<th>Opções</th>';
        cabecalho += '</tr>';

        document.querySelector('.tabela > thead').insertAdjacentHTML('beforeend', cabecalho);//adiciona o cabeçalho

        for(let i = 0; i < resultado.length; i++)
        {
            //prepara os dados a serem adicionados
            let txtHtml;
            if(i % 2 == 0)
                txtHtml = "<tr class='dif'>";
            else
                txtHtml = "<tr>";
            txtHtml += "<td class='col_nome'>"+resultado[i]["nome"]+"</td>";
            txtHtml += "<td class='col_login'>"+resultado[i]["login"]+"</td>";
            txtHtml += "<td class='col_email'>"+resultado[i]["email"]+"</td>";
            txtHtml += "<td class='col_cpf'>"+resultado[i]["cargo"]+"</td>";
            txtHtml += "<td><a class='detalhes' href='javascript:void(0)'>Detalhes</a></td>";
            txtHtml += "</tr>";

            let tbody = document.querySelector('.tabela > tbody');
            tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos
            let ultimaLinha = tbody.querySelector('tr:last-child');
            let detalhes = ultimaLinha.querySelector('.detalhes');

            detalhes.addEventListener('click', function detalhes(){
                // let cookie = ultimaLinha.querySelector('.col_codigo').textContent;
                // document.cookie = 'Codigo='+resultado[i]["id"];
                // window.location.replace('reserva.php');
            });
        }
    }
    else if(cbxTipo.options[cbxTipo.selectedIndex].value == 'alugado'){
        
    }

});

btnBuscar.addEventListener('click', function() { //busca resultado 

    let erro = document.querySelector("#form-erro");
    let txtBuscar = document.querySelector('#txtBuscar').value;

    if(txtBuscar.trim().length > 0)
    {
        if(cbxTipo.options[cbxTipo.selectedIndex].value == 'cliente'){
            //envia a requisição
            let url = '../controle/controle_cliente.php';
            let params = 'op=buscabusca&nome='+txtBuscar+'&cpf='+txtBuscar+'&email='+txtBuscar+'&telefone='+txtBuscar+'&login='+txtBuscar+'&senha='+txtBuscar;
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(params);
        }
        else if(cbxTipo.options[cbxTipo.selectedIndex].value == 'funcionario'){
            //envia a requisição
            let url = '../controle/controle_funcionario.php';
            let params = 'op=buscabusca&nome='+txtBuscar+'&cargo='+txtBuscar+'&email='+txtBuscar+'&login='+txtBuscar+'&senha='+txtBuscar;
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(params);
        }
        
        erro.style = 'display: none';
    }else{
        erro.textContent = 'Insira alguma informação';
        erro.style = 'display: initial';
    }
    
})

btnCadastrarFuncionario.addEventListener('click', function() {
    window.location.replace('cadastro_funcionario.php');
});

btnCadastrarLivro.addEventListener('click', function() {
    window.location.replace('cadastro_livro.php');
});

btnAlugar.addEventListener('click', function() {
    window.location.replace('alugar.php');
});

function setCookie(name, value, duration) {
    var cookie = name + "=" + escape(value) +
    ((duration) ? "; duration=" + duration.toGMTString() : "");

    document.cookie = cookie;
}