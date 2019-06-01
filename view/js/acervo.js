let btnBuscar = document.querySelector('#btnBuscar');
var xhr = new XMLHttpRequest();

xhr.addEventListener('load', function () {//retornar os resultados da busca para a tela
    let livros = JSON.parse(this.responseText.trim());//passa para uma lista os arquivos do JSON

    let tr = document.querySelectorAll('.tabela > tbody > tr');
    for (let i = 0; i < tr.length; i++)
        tr[i].remove() //remove elementos existentes na tabela

    for (let i = 0; i < livros.length; i++) {
        //prepara os dados a serem adicionados
        let txtHtml = "<tr>";
        txtHtml += "<td class='col_codigo'>" + livros[i]["codigo"] + "</td>";
        txtHtml += "<td class='col_titulo'>" + livros[i]["titulo"] + "</td>";
        txtHtml += "<td class='col_autor'>" + livros[i]["autor"] + "</td>";
        txtHtml += "<td class='col_ano'>" + livros[i]["ano"] + "</td>";
        txtHtml += "<td class='col_editora'>" + livros[i]["editora"] + "</td>";
        txtHtml += "<td class='col_disponivel'>" + livros[i]["disponivel"] + "</td>";
        if (sessionStorage.getItem('logado') != null)
            txtHtml += "<td><a class='reservar' href='javascript:void(0)'>Reservar</a></td>";
        else if (sessionStorage.getItem('admin') != null)
            txtHtml += "<td><a class='editar' href='javascript:void(0)'>Editar</a><a class='remover' href='javascript:void(0)'>Remover</a></td>";

        txtHtml += "</tr>";

        let tbody = document.querySelector('.tabela > tbody');
        tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos
        let ultimaLinha = tbody.querySelector('tr:last-child');
        if (sessionStorage.getItem('logado') != null) {
            let reservar = ultimaLinha.querySelector('.reservar');
            reservar.addEventListener('click', function reservar() {
                window.location.replace('reserva.php?&livro=' + livros[i]["codigo"]);
            });
        }
        else {
            let apagar = ultimaLinha.querySelector('.remover');

            apagar.addEventListener('click', function () {
                let linha = this.parentNode.parentNode;

                let xA = new XMLHttpRequest();
                let urlX = '../controle/controle_livro.php';
                let paramsX = 'op=remover&id='+livros[i]["id"]+'&autor=0&titulo=0&ano=0&editora=0&codigo=0&quantidade=0&disponivel=0';
                xA.open("POST", urlX, true);
                xA.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xA.send(paramsX);

                linha.remove();
            });

            let editar = ultimaLinha.querySelector('.editar');
            editar.addEventListener('click', function () {
                let linhaTr = this.parentNode.parentNode;
                let colunaCodigo = linhaTr.querySelector('.col_codigo');
                let colunaTitulo = linhaTr.querySelector('.col_titulo');
                let colunaAutor = linhaTr.querySelector('.col_autor');
                let colunaAno = linhaTr.querySelector('.col_ano');
                let colunaEditora = linhaTr.querySelector('.col_editora');
                let colunaDisponivel = linhaTr.querySelector('.col_disponivel');

                if (colunaCodigo.querySelectorAll('input').length > 0) {
                    // terminando de editar
                    let codigo = colunaCodigo.querySelector('input').value;
                    let editora = colunaEditora.querySelector('input').value;
                    let ano = colunaAno.querySelector('input').value;
                    let autor = colunaAutor.querySelector('input').value;
                    let titulo = colunaTitulo.querySelector('input').value;
                    let disponivel = colunaDisponivel.querySelector('input').value;

                    var xhrEditar = new XMLHttpRequest();
                    xhrEditar.addEventListener('load', function () {
                        let erro = document.querySelector("#form-erro");
                        let sucesso = document.querySelector("#form-sucesso");
                        let retorno = this.responseText.trim();
                        if (retorno == 'Sucesso') {
                            colunaAno.innerHTML = ano;
                            colunaAutor.innerHTML = autor;
                            colunaCodigo.innerHTML = codigo;
                            colunaDisponivel.innerHTML = disponivel;
                            colunaEditora.innerHTML = editora;
                            colunaTitulo.innerHTML = titulo;
                            editar.innerHTML = "Editar";
                            
                            erro.style = 'display: none';
                            sucesso.style = 'display: initial';

                        } else {
                            erro.textContent = 'Erro ao atualizar';
                            erro.style = 'display: initial';
                        }
                    }); 

                    let url = '../controle/controle_livro.php';
                    let params = 'op=editar&id='+livros[i]["id"]+'&autor='+autor+'&titulo='
                    +titulo+'&ano='+ano+'&editora='+editora+'&codigo='+codigo+'&quantidade='+disponivel+'&disponivel='+disponivel;
                    xhrEditar.open("POST", url, true);
                    xhrEditar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhrEditar.send(params);

                } else {
                    // iniciando a edição
                    editar.innerHTML = "Salvar";
                    colunaCodigo.innerHTML = "<input type='text' value='" + colunaCodigo.textContent + "'>";
                    colunaEditora.innerHTML = "<input type='text' value='" + colunaEditora.textContent + "'>";
                    colunaAno.innerHTML = "<input type='text' value='" + colunaAno.textContent + "'>";
                    colunaAutor.innerHTML = "<input type='text' value='" + colunaAutor.textContent + "'>";
                    colunaTitulo.innerHTML = "<input type='text' value='" + colunaTitulo.textContent + "'>";
                    colunaDisponivel.innerHTML = "<input type='text' value='" + colunaDisponivel.textContent + "'>";
                }
            });
        }
    }

});

btnBuscar.addEventListener('click', function () { //busca livros 

    let erro = document.querySelector("#form-erro");
    let txtBuscar = document.querySelector('#txtBuscar').value;

    if (txtBuscar.trim().length > 0) {
        //envia a requisição
        let url = '../controle/controle_livro.php';
        let params = 'op=buscabusca&autor=' + txtBuscar + '&titulo='
            + txtBuscar + '&ano=' + txtBuscar + '&editora=' + txtBuscar + '&codigo=' + txtBuscar + '&quantidade=' + txtBuscar + '&disponivel=' + txtBuscar;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);

        erro.style = 'display: none';
    } else {
        erro.textContent = 'Insira alguma informação';
        erro.style = 'display: initial';
    }

});