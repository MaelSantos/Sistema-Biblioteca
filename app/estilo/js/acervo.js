let erro = $("#form-erro");
let sucesso = $("#form-sucesso");
erro.hide()
sucesso.hide()

$('#btnBuscar').click(function () { //busca livros 

    let txtBuscar = $('#txtBuscar').val().trim();

    if (txtBuscar.length > 0) {
        //envia a requisição
        $.ajax({
            method: 'POST',
            url: '/Livro/Buscar/',
            data: { busca: txtBuscar },
            success: function (livro) {

                livros = JSON.parse(livro)

                erro.hide()
                sucesso.show()

                let tr = $('#tabela > tbody > tr');
                for (let i = 0; i < tr.length; i++)
                    tr[i].remove() //remove elementos existentes na tabela

                for (let i = 0; i < livros.length; i++) {
                    //prepara os dados a serem adicionados
                    let txtHtml = "<tr>";
                    txtHtml += "<td class='col_codigo'>" + livros[i]["id"] + "</td>";
                    txtHtml += "<td class='col_codigo'>" + livros[i]["codigo"] + "</td>";
                    txtHtml += "<td class='col_titulo'>" + livros[i]["titulo"] + "</td>";
                    txtHtml += "<td class='col_autor'>" + livros[i]["autor"] + "</td>";
                    txtHtml += "<td class='col_ano'>" + livros[i]["ano"] + "</td>";
                    txtHtml += "<td class='col_editora'>" + livros[i]["editora"] + "</td>";
                    txtHtml += "<td class='col_disponivel'>" + livros[i]["disponivel"] + "</td>";
                    if (sessionStorage.getItem('logado') != null)
                        txtHtml += "<td><a class='reservar' href='javascript:void(0)'>Reservar</a></td>";
                    else if (sessionStorage.getItem('admin') != null)
                        txtHtml += "<td><a class='editar' href='javascript:void(0)'>Editar</a> <a class='remover' href='javascript:void(0)'>Remover</a></td>";

                    txtHtml += "</tr>";

                    let tbody = $('#tabela > tbody');
                    tbody.append(txtHtml);//adiciona os novos elementos
                    let ultimaLinha = tbody.last('tr');
                    if (sessionStorage.getItem('logado') != null) {
                        let reservar = $('a[class="reservar"]').last();
                        reservar.click(function () {
                            $(location).attr('href', '/Livro/Reserva/' + livros[i]["codigo"] + '/' + sessionStorage.getItem('logado'));
                        });
                    }
                    else {
                        let apagar = $('a[class="remover"]').last();

                        apagar.click(function () {
                            let ultimaLinha = $('#tabela > tbody > tr').last()
                            $.ajax({
                                method: 'POST',
                                url: '/Livro/Remover/',
                                data: { id: livros[i]["id"] },
                                success: function (resposta) {
                                    resposta = JSON.parse(resposta)
                                    if (resposta['status'] == 'OK')
                                        ultimaLinha.remove()
                                },
                            }) 
                        });

                        let editar = $('a[class="editar"]').last();
                        editar.click(function () {

                            let colunaCodigo = $('#tabela > tbody > tr > td.col_codigo').last();
                            let colunaTitulo = $('#tabela > tbody > tr > td.col_titulo').last();
                            let colunaAutor = $('#tabela > tbody > tr > td.col_autor').last();
                            let colunaAno = $('#tabela > tbody > tr > td.col_ano').last();
                            let colunaEditora = $('#tabela > tbody > tr > td.col_editora').last();
                            let colunaDisponivel = $('#tabela > tbody > tr > td.col_disponivel').last();

                            if (colunaCodigo.children('input').length > 0) {
                                // terminando de editar
                                let codigo = colunaCodigo.children('input').val().trim();
                                let editora = colunaEditora.children('input').val().trim();
                                let ano = colunaAno.children('input').val().trim();
                                let autor = colunaAutor.children('input').val().trim();
                                let titulo = colunaTitulo.children('input').val().trim();
                                let disponivel = colunaDisponivel.children('input').val().trim();

                                $.ajax({
                                    method: 'POST',
                                    url: '/Livro/Editar/',
                                    data: { id: livros[i]["id"], autor: autor, titulo: titulo, ano: ano, editora: editora, codigo: codigo, quantidade: disponivel, disponivel: disponivel },
                                    success: function (resposta) {
                                        colunaAno.html(ano);
                                        colunaAutor.html(autor);
                                        colunaCodigo.html(codigo);
                                        colunaDisponivel.html(disponivel);
                                        colunaEditora.html(editora);
                                        colunaTitulo.html(titulo);
                                        editar.text("Editar");

                                        erro.hide();
                                        sucesso.show();
                                    },
                                    error: function (resposta) {
                                        sucesso.hide()
                                        erro.show()
                                    }
                                })

                            } else {
                                // iniciando a edição
                                editar.text("Salvar")
                                colunaCodigo.html("<input type='text' class='form-control' value='" + colunaCodigo.html() + "'>");
                                colunaEditora.html("<input type='text' class='form-control' value='" + colunaEditora.html() + "'>");
                                colunaAno.html("<input type='text' class='form-control' value='" + colunaAno.html() + "'>");
                                colunaAutor.html("<input type='text' class='form-control' value='" + colunaAutor.html() + "'>");
                                colunaTitulo.html("<input type='text' class='form-control' value='" + colunaTitulo.html() + "'>");
                                colunaDisponivel.html("<input type='text' class='form-control' value='" + colunaDisponivel.html() + "'>");
                            }
                        });
                    }
                }

            },
            error: function () {
                sucesso.hide()
                erro.show()
            }
        })

    } else {
        sucesso.hide()
        erro.show()
    }

});