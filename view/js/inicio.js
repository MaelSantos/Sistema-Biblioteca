var xhrAlugados = new XMLHttpRequest();
var xhrReservados = new XMLHttpRequest();
var xhrAtrazados = new XMLHttpRequest();

xhrAlugados.addEventListener('load', function() {//retornar os resultados da busca para a tela
    let resultado = JSON.parse(this.responseText.trim());//passa para uma lista os arquivos do JSON

    let tr = document.querySelectorAll('#alugados > tbody > tr');
    for(let i = 0; i < tr.length; i++)
        tr[i].remove() //remove elementos existentes na tabela
    
    for(let i = 0; i < resultado.length; i++)
    {
        //prepara os dados a serem adicionados
        let txtHtml = "<tr>";
        txtHtml += "<td class='col_livro'>" + resultado[i]["titulo"] + "</td>";
        txtHtml += "<td class='col_locacao'>" + resultado[i]["data_locacao"] + "</td>";
        txtHtml += "<td class='col_devolucao'>" + resultado[i]["data_devolucao"] + "</td>";
        txtHtml += "<td class='col_diaria'>" + resultado[i]["diaria"] + "</td>";
        txtHtml += "<td class='col_cliente'>" + resultado[i][9] + "</td>";
        txtHtml += "<td class='col_funcionario'>" + resultado[i][10] + "</td>";
        txtHtml += "</tr>";
        
        let tbody = document.querySelector('#alugados > tbody');
        tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos
    }
    
});

xhrReservados.addEventListener('load', function() {//retornar os resultados da busca para a tela
    console.log(this.responseText.trim());
    let resultado = JSON.parse(this.responseText.trim());//passa para uma lista os arquivos do JSON

    let tr = document.querySelectorAll('#reservados > tbody > tr');
    for(let i = 0; i < tr.length; i++)
        tr[i].remove() //remove elementos existentes na tabela
    
    for(let i = 0; i < resultado.length; i++)
    {
        //prepara os dados a serem adicionados
        let txtHtml = "<tr>";
        txtHtml += "<td class='col_livro'>" + resultado[i]["titulo"] + "</td>";
        txtHtml += "<td class='col_locacao'>" + resultado[i]["data_reserva"] + "</td>";
        txtHtml += "<td class='col_devolucao'>" + resultado[i]["data_retirada"] + "</td>";
        txtHtml += "<td class='col_cliente'>" + resultado[i]["nome"] + "</td>";
        txtHtml += "<td><a class='cancelar' href='javascript:void(0)'>Cancelar</a></td>";
        txtHtml += "</tr>";
        
        let tbody = document.querySelector('#reservados > tbody');
        tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos
        let ultimaLinha = tbody.querySelector('tr:last-child');
        let apagar = ultimaLinha.querySelector('.cancelar');

        apagar.addEventListener('click', function () {
            let linha = this.parentNode.parentNode;

            let cliente = linha.querySelector(".col_cliente").textContent.trim();
            let livro = linha.querySelector(".col_livro").textContent.trim();
            console.log(resultado[i]["id"]);
            let x = new XMLHttpRequest();
            let url = '../controle/controle_reserva.php';
            let params = 'op=remover&id='+resultado[i]["id"]+'&id_livro='+livro+'&id_cliente='+cliente+'0&data_reserva=0&data_retirada=0';
            x.open("POST", url, true);
            x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            x.send(params);

            linha.remove();
        });
    }
    
});

xhrAtrazados.addEventListener('load', function() {//retornar os resultados da busca para a tela
    let resultado = JSON.parse(this.responseText.trim());//passa para uma lista os arquivos do JSON

    let tr = document.querySelectorAll('#atrasados > tbody > tr');
    for(let i = 0; i < tr.length; i++)
        tr[i].remove() //remove elementos existentes na tabela
    
    for(let i = 0; i < resultado.length; i++)
    {
        //prepara os dados a serem adicionados
        let txtHtml = "<tr>";
        txtHtml += "<td class='col_livro'>" + resultado[i]["titulo"] + "</td>";
        txtHtml += "<td class='col_locacao'>" + resultado[i]["data_locacao"] + "</td>";
        txtHtml += "<td class='col_devolucao'>" + resultado[i]["data_devolucao"] + "</td>";
        txtHtml += "<td class='col_diaria'>" + resultado[i]["diaria"] + "</td>";
        txtHtml += "<td class='col_cliente'>" + resultado[i][9] + "</td>";
        txtHtml += "<td class='col_funcionario'>" + resultado[i][10] + "</td>";
        txtHtml += "</tr>";
        
        let tbody = document.querySelector('#atrasados > tbody');
        tbody.insertAdjacentHTML('beforeend', txtHtml );//adiciona os novos elementos
    }
    
});


//Alugados
let urlAl = '../controle/controle_aluga.php';
let paramsAl = 'op=buscaid&data_locacao=0&data_devolucao=0&diaria=0&id_funcionario=0&id_cliente=0&id_livro=0';
xhrAlugados.open("POST", urlAl, true);
xhrAlugados.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhrAlugados.send(paramsAl);

//Reservados
let urlRe = '../controle/controle_reserva.php';
let paramsRe = 'op=buscaid&id_livro=0&id_cliente=0&data_reserva=0&data_retirada=0';
xhrReservados.open("POST", urlRe, true);
xhrReservados.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhrReservados.send(paramsRe);

//Atrasados
let urlAt = '../controle/controle_aluga.php';
let paramsAt = 'op=buscaAtrazados&data_locacao=0&data_devolucao=0&diaria=0&id_funcionario=0&id_cliente=0&id_livro=0';
xhrAtrazados.open("POST", urlAt, true);
xhrAtrazados.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhrAtrazados.send(paramsAt);
