
let btnBuscar = document.querySelector('#btnBuscar');
let btnCadastrarFuncionario = document.querySelector('#btnCadastrarFuncionario');
let btnCadastrarLivro = document.querySelector('#btnCadastrarLivro');
let btnAlugar = document.querySelector('#btnAlugar');

var xhr = new XMLHttpRequest();

var cbxTipo = document.querySelector('#cbxTipo');

xhr.addEventListener('load', function () {//retornar os resultados da busca para a tela

    let resultado = JSON.parse(this.responseText.trim());//passa para uma lista os arquivos do JSON
    console.log(resultado);
    let tr = document.querySelectorAll('.tabela > tbody > tr');
    for (let i = 0; i < tr.length; i++)
        tr[i].remove() //remove elementos existentes na tabela

    let th = document.querySelectorAll('.tabela > thead > tr');
    if (th != null)
        for (let i = 0; i < th.length; i++)
            th[i].remove() //remove elementos existentes na tabela

    if (cbxTipo.options[cbxTipo.selectedIndex].value == 'cliente') {

        let cabecalho = '<tr>';
        cabecalho += '<th>Nome</th>';
        cabecalho += '<th>Login</th>';
        cabecalho += '<th>Email</th>';
        cabecalho += '<th>Cpf</th>';
        cabecalho += '<th>Telefone</th>';
        cabecalho += '<th>Opções</th>';
        cabecalho += '</tr>';

        document.querySelector('.tabela > thead').insertAdjacentHTML('beforeend', cabecalho);//adiciona o cabeçalho

        for (let i = 0; i < resultado.length; i++) {

            //prepara os dados a serem adicionados
            let txtHtml = "<tr>";
            txtHtml += "<td class='col_nome'>" + resultado[i]["nome"] + "</td>";
            txtHtml += "<td class='col_login'>" + resultado[i]["login"] + "</td>";
            txtHtml += "<td class='col_email'>" + resultado[i]["email"] + "</td>";
            txtHtml += "<td class='col_cpf'>" + resultado[i]["cpf"] + "</td>";
            txtHtml += "<td class='col_telefone'>" + resultado[i]["telefone"] + "</td>";
            txtHtml += "<td><a class='deletar' href='javascript:void(0)'>Deletar</a></td>";
            txtHtml += "</tr>";

            let tbody = document.querySelector('.tabela > tbody');
            tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos
            let ultimaLinha = tbody.querySelector('tr:last-child');
            let apagar = ultimaLinha.querySelector('.deletar');

            apagar.addEventListener('click', function () {
                let linha = this.parentNode.parentNode;

                let cpf = linha.querySelector(".col_cpf").textContent.trim();

                let x = new XMLHttpRequest();
                let url = '../controle/controle_cliente.php';
                let params = 'op=remover&nome=0&cpf=' + cpf + '&email=0&telefone=0&login=0&senha=0';
                x.open("POST", url, true);
                x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                x.send(params);

                linha.remove();
            });
        }

    }
    else if (cbxTipo.options[cbxTipo.selectedIndex].value == 'funcionario') {
        let cabecalho = '<tr>';
        cabecalho += '<th>Nome</th>';
        cabecalho += '<th>Login</th>';
        cabecalho += '<th>Email</th>';
        cabecalho += '<th>Cargo</th>';
        cabecalho += '<th>Opções</th>';
        cabecalho += '</tr>';

        document.querySelector('.tabela > thead').insertAdjacentHTML('beforeend', cabecalho);//adiciona o cabeçalho

        for (let i = 0; i < resultado.length; i++) {
            //prepara os dados a serem adicionados
            let txtHtml = "<tr>";
            txtHtml += "<td class='col_nome'>" + resultado[i]["nome"] + "</td>";
            txtHtml += "<td class='col_login'>" + resultado[i]["login"] + "</td>";
            txtHtml += "<td class='col_email'>" + resultado[i]["email"] + "</td>";
            txtHtml += "<td class='col_cargo'>" + resultado[i]["cargo"] + "</td>";
            txtHtml += "<td><a class='deletar' href='javascript:void(0)'>Deletar</a></td>";
            txtHtml += "</tr>";

            let tbody = document.querySelector('.tabela > tbody');
            tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos
            let ultimaLinha = tbody.querySelector('tr:last-child');
            let apagar = ultimaLinha.querySelector('.deletar');

            apagar.addEventListener('click', function () {
                let linha = this.parentNode.parentNode;

                let login = linha.querySelector(".col_login").textContent.trim();

                let x = new XMLHttpRequest();
                let url = '../controle/controle_funcionario.php';
                let params = 'op=remover&nome=0&cargo=0&email=0&login=' + login + '&senha=0';
                x.open("POST", url, true);
                x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                x.send(params);

                linha.remove();
            });
        }
    }
    else if (cbxTipo.options[cbxTipo.selectedIndex].value == 'alugado') {
        let cabecalho = '<tr>';
        cabecalho += '<th>Locação</th>';
        cabecalho += '<th>Devolução</th>';
        cabecalho += '<th>Data Devolvido</th>';
        cabecalho += '<th>Diaria</th>';
        cabecalho += '<th>Funcionario</th>';
        cabecalho += '<th>Cliente</th>';
        cabecalho += '<th>Livro</th>';
        cabecalho += '<th>Ativo</th>';
        cabecalho += '<th>Opções</th>';
        cabecalho += '</tr>';

        document.querySelector('.tabela > thead').insertAdjacentHTML('beforeend', cabecalho);//adiciona o cabeçalho

        for (let i = 0; i < resultado.length; i++) {
            //prepara os dados a serem adicionados
            let txtHtml = "<tr>";
            txtHtml += "<td class='col_locacao'>" + resultado[i]["data_locacao"] + "</td>";
            txtHtml += "<td class='col_devolucao'>" + resultado[i]["data_devolucao"] + "</td>";
            txtHtml += "<td class='col_devolvido'>" + resultado[i]["data_devolvido"] + "</td>";
            txtHtml += "<td class='col_diaria'>" + resultado[i]["diaria"] + "</td>";
            txtHtml += "<td class='col_funcionario'>" + resultado[i][10] + "</td>";
            txtHtml += "<td class='col_cliente'>" + resultado[i][9] + "</td>";
            txtHtml += "<td class='col_livro'>" + resultado[i]["titulo"] + "</td>";
            if (resultado[i]["ativo"] == 1)
            {
                txtHtml += "<td class='col_ativo'>Sim</td>";
                txtHtml += "<td><a class='deletar' href='javascript:void(0)'>Devolução</a></td>";
            }
            else{
                txtHtml += "<td class='col_ativo'>Não</td>";
                txtHtml += "<td><p>Devolvido</p></td>";
            }
            txtHtml += "</tr>";

            let tbody = document.querySelector('.tabela > tbody');
            tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos
            let ultimaLinha = tbody.querySelector('tr:last-child');
            
            if (resultado[i]["ativo"] == 1)
            {
                let apagar = ultimaLinha.querySelector('.deletar');
                apagar.addEventListener('click', function () {
                    let linha = this.parentNode.parentNode;
    
                    let cliente = linha.querySelector(".col_cliente").textContent.trim();
                    let livro = linha.querySelector(".col_livro").textContent.trim();
    
                    let x = new XMLHttpRequest();
                    let url = '../controle/controle_aluga.php';
                    let params = 'op=remover&id='+resultado[i]["id"]+'&data_locacao=0&data_devolucao=0&diaria=0&id_funcionario=0&id_cliente=' + cliente + '&id_livro=' + livro;
                    x.open("POST", url, true);
                    x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    x.send(params);
    
                    // linha.remove();
    
                    //envia a requisição
                    let txtBuscar = document.querySelector('#txtBuscar').value;
                    let urlN = '../controle/controle_aluga.php';
                    let paramsN = 'op=buscabusca&data_locacao=' + txtBuscar + '&data_devolucao=' + txtBuscar + '&diaria=' + txtBuscar + '&id_funcionario=' + txtBuscar + '&id_cliente=' + txtBuscar + '&id_livro=' + txtBuscar;
                    paramsN += '&nome=' + txtBuscar + '&cpf=' + txtBuscar + '&email=' + txtBuscar + '&telefone=' + txtBuscar + '&login=' + txtBuscar;
                    xhr.open("POST", urlN, true);
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.send(paramsN);
                });
            }
        }
    }

});

btnBuscar.addEventListener('click', function () { //busca resultado 

    let erro = document.querySelector("#form-erro");
    let txtBuscar = document.querySelector('#txtBuscar').value;

    if (txtBuscar.trim().length > 0) {
        if (cbxTipo.options[cbxTipo.selectedIndex].value == 'cliente') {
            //envia a requisição
            let url = '../controle/controle_cliente.php';
            let params = 'op=buscabusca&nome=' + txtBuscar + '&cpf=' + txtBuscar + '&email=' + txtBuscar + '&telefone=' + txtBuscar + '&login=' + txtBuscar + '&senha=' + txtBuscar;
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(params);
        }
        else if (cbxTipo.options[cbxTipo.selectedIndex].value == 'funcionario') {
            //envia a requisição
            let url = '../controle/controle_funcionario.php';
            let params = 'op=buscabusca&nome=' + txtBuscar + '&cargo=' + txtBuscar + '&email=' + txtBuscar + '&login=' + txtBuscar + '&senha=' + txtBuscar;
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(params);
        }
        else if (cbxTipo.options[cbxTipo.selectedIndex].value == 'alugado') {
            //envia a requisição
            let url = '../controle/controle_aluga.php';
            let params = 'op=buscabusca&data_locacao=' + txtBuscar + '&data_devolucao=' + txtBuscar + '&diaria=' + txtBuscar + '&id_funcionario=' + txtBuscar + '&id_cliente=' + txtBuscar + '&id_livro=' + txtBuscar;
            params += '&nome=' + txtBuscar + '&cpf=' + txtBuscar + '&email=' + txtBuscar + '&telefone=' + txtBuscar + '&login=' + txtBuscar;
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(params);
        }

        erro.style = 'display: none';
    } else {
        erro.textContent = 'Insira alguma informação';
        erro.style = 'display: initial';
    }

})

btnCadastrarFuncionario.addEventListener('click', function () {
    window.location.replace('cadastro_funcionario.php');
});

btnCadastrarLivro.addEventListener('click', function () {
    window.location.replace('cadastro_livro.php');
});

btnAlugar.addEventListener('click', function () {
    window.location.replace('aluga.php');
});