let btnBuscar = document.querySelector('#btnBuscar');
var xhr = new XMLHttpRequest();

xhr.addEventListener('load', function() {//retornar os resultados da busca para a tela
    let livros = JSON.parse(this.responseText.trim());//passa para uma lista os arquivos do JSON

    let tr = document.querySelectorAll('.tabela > tbody > tr');
    for(let i = 0; i < tr.length; i++)
        tr[i].remove() //remove elementos existentes na tabela
    
    for(let i = 0; i < livros.length; i++)
    {
        //prepara os dados a serem adicionados
        let txtHtml;
        if(i % 2 == 0)
            txtHtml = "<tr class='dif'>";
        else
            txtHtml = "<tr>";
        txtHtml += "<td class='col_codigo'>"+livros[i]["codigo"]+"</td>";
        txtHtml += "<td class='col_titulo'>"+livros[i]["titulo"]+"</td>";
        txtHtml += "<td class='col_autor'>"+livros[i]["autor"]+"</td>";
        txtHtml += "<td class='col_ano'>"+livros[i]["ano"]+"</td>";
        txtHtml += "<td class='col_editora'>"+livros[i]["editora"]+"</td>";
        txtHtml += "<td class='col_disponivel'>"+livros[i]["disponivel"]+"</td>";
        txtHtml += "<td><a class='reservar' href='javascript:void(0)'>Reservar</a></td>";
        txtHtml += "</tr>";

        let tbody = document.querySelector('.tabela > tbody');
        tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos
        let ultimaLinha = tbody.querySelector('tr:last-child');
        let reservar = ultimaLinha.querySelector('.reservar');

        reservar.addEventListener('click', function reservar(){
            let cookie = ultimaLinha.querySelector('.col_codigo').textContent;
            document.cookie = 'Codigo='+livros[i]["id"];
            window.location.replace('reserva.php');
        });
    }
    
});

btnBuscar.addEventListener('click', function() { //busca livros 

    let erro = document.querySelector("#form-erro");
    let txtBuscar = document.querySelector('#txtBuscar').value;

    if(txtBuscar.trim().length > 0)
    {
        //envia a requisição
        let url = '../controle/controle_livro.php';
        let params = 'op=buscabusca&autor='+txtBuscar+'&titulo='
        +txtBuscar+'&ano='+txtBuscar+'&editora='+txtBuscar+'&codigo='+txtBuscar+'&quantidade='+txtBuscar+'&disponivel='+txtBuscar;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
        
        erro.style = 'display: none';
    }else{
        erro.textContent = 'Insira alguma informação';
        erro.style = 'display: initial';
    }
    
})

function setCookie(name, value, duration) {
    var cookie = name + "=" + escape(value) +
    ((duration) ? "; duration=" + duration.toGMTString() : "");

    document.cookie = cookie;
}