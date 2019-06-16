let erro = $("#form-erro");
erro.hide()

$('#btnBuscar').click(function () { //busca resultado

    let txtBuscar = $('#txtBuscar').val().trim();
    var cbxTipo = $('#cbxTipo');
    console.log(cbxTipo.children('option:selected').val())

    let tr = $('#tabela > tbody > tr');
    for (let i = 0; i < tr.length; i++)
        tr[i].remove() //remove elementos existentes na tabela

    let th = $('#tabela > thead > tr');
    if (th != null)
        for (let i = 0; i < th.length; i++)
            th[i].remove() //remove elementos existentes na tabela

    if (txtBuscar.length > 0) {
        if (cbxTipo.children('option:selected').val() == 'cliente') {
            $.ajax({
                method: 'POST',
                url: '/Cliente/Buscar/',
                data: { busca: txtBuscar },
                success: function (resposta) {
                    let resultado = JSON.parse(resposta);//passa para uma lista os arquivos do JSON

                    let cabecalho = '<tr>';
                    cabecalho += '<th scope="col">#</th>';
                    cabecalho += '<th scope="col">Nome</th>';
                    cabecalho += '<th scope="col">Login</th>';
                    cabecalho += '<th scope="col">Email</th>';
                    cabecalho += '<th scope="col">Cpf</th>';
                    cabecalho += '<th scope="col">Telefone</th>';
                    cabecalho += '<th scope="col">Opções</th>';
                    cabecalho += '</tr>';

                    $('#tabela > thead').append(cabecalho);//adiciona o cabeçalho

                    for (let i = 0; i < resultado.length; i++) {

                        //prepara os dados a serem adicionados
                        let txtHtml = "<tr>";
                        txtHtml += "<td class='col_id'>" + resultado[i]["id"] + "</td>";
                        txtHtml += "<td class='col_nome'>" + resultado[i]["nome"] + "</td>";
                        txtHtml += "<td class='col_login'>" + resultado[i]["login"] + "</td>";
                        txtHtml += "<td class='col_email'>" + resultado[i]["email"] + "</td>";
                        txtHtml += "<td class='col_cpf'>" + resultado[i]["cpf"] + "</td>";
                        txtHtml += "<td class='col_telefone'>" + resultado[i]["telefone"] + "</td>";
                        txtHtml += "<td><a class='deletar' href='javascript:void(0)'>Deletar</a></td>";
                        txtHtml += "</tr>";

                        let tbody = $('#tabela > tbody');
                        tbody.append(txtHtml);//adiciona os novos elementos
                        let apagar = $('a[class="deletar"]').last();

                        apagar.click(function () {
                            let ultimaLinha = $('#tabela > tbody > tr').last()

                            $.ajax({
                                method: 'POST',
                                url: '/Cliente/Remover/',
                                data: { id: resultado[i]["id"] },
                                success: function (resposta) {
                                    resposta = JSON.parse(resposta)
                                    if (resposta['status'] == 'Ok')
                                        ultimaLinha.remove()
                                },
                            })
                        });
                    }
                    erro.hide()
                },
                error: function () {
                    erro.show()
                }
            })
        }
        else if (cbxTipo.children('option:selected').val() == 'funcionario') {
            $.ajax({
                method: 'POST',
                url: '/Funcionario/Buscar/',
                data: { busca: txtBuscar },
                success: function (resposta) {
                    let resultado = JSON.parse(resposta);//passa para uma lista os arquivos do JSON

                    let cabecalho = '<tr>';
                    cabecalho += '<th scope="col">#</th>';
                    cabecalho += '<th scope="col">Nome</th>';
                    cabecalho += '<th scope="col">Login</th>';
                    cabecalho += '<th scope="col">Email</th>';
                    cabecalho += '<th scope="col">Cargo</th>';
                    cabecalho += '<th scope="col">Opções</th>';
                    cabecalho += '</tr>';

                    $('#tabela > thead').append(cabecalho);//adiciona o cabeçalho

                    for (let i = 0; i < resultado.length; i++) {
                        //prepara os dados a serem adicionados
                        let txtHtml = "<tr>";
                        txtHtml += "<td class='col_id'>" + resultado[i]["id"] + "</td>";
                        txtHtml += "<td class='col_nome'>" + resultado[i]["nome"] + "</td>";
                        txtHtml += "<td class='col_login'>" + resultado[i]["login"] + "</td>";
                        txtHtml += "<td class='col_email'>" + resultado[i]["email"] + "</td>";
                        txtHtml += "<td class='col_cargo'>" + resultado[i]["cargo"] + "</td>";
                        txtHtml += "<td><a class='deletar' href='javascript:void(0)'>Deletar</a></td>";
                        txtHtml += "</tr>";

                        let tbody = $('#tabela > tbody');
                        tbody.append(txtHtml);//adiciona os novos elementos
                        let apagar = $('a[class="deletar"]').last();

                        apagar.click(function () {
                            let ultimaLinha = $('#tabela > tbody > tr').last()

                            $.ajax({
                                method: 'POST',
                                url: '/Funcionario/Remover/',
                                data: { id: resultado[i]["id"] },
                                success: function (resposta) {
                                    resposta = JSON.parse(resposta)
                                    if (resposta['status'] == 'Ok')
                                        ultimaLinha.remove()
                                },
                            })
                        });
                    }
                    erro.hide()
                },
                error: function () {
                    erro.show()
                }
            })
        }
        else if (cbxTipo.children('option:selected').val() == 'alugado') {
            $.ajax({
                method: 'POST',
                url: '/Locação/Buscar/Buscar/',
                data: { busca: txtBuscar },
                success: function (resposta) {
                    let resultado = JSON.parse(resposta);//passa para uma lista os arquivos do JSON
                    let cabecalho = '<tr>';
                    cabecalho += '<th scope="col">#</th>';
                    cabecalho += '<th scope="col">Locação</th>';
                    cabecalho += '<th scope="col">Devolução</th>';
                    cabecalho += '<th scope="col">Data Devolvido</th>';
                    cabecalho += '<th scope="col">Diaria</th>';
                    // cabecalho += '<th>Funcionario</th>';
                    cabecalho += '<th scope="col">Cliente</th>';
                    cabecalho += '<th scope="col">Livro</th>';
                    cabecalho += '<th scope="col">Ativo</th>';
                    cabecalho += '<th scope="col">Opções</th>';
                    cabecalho += '</tr>';

                    $('#tabela > thead').append(cabecalho);//adiciona o cabeçalho

                    for (let i = 0; i < resultado.length; i++) {
                        //prepara os dados a serem adicionados
                        let txtHtml = "<tr>";
                        txtHtml += "<td class='col_id'>" + resultado[i]["id"] + "</td>";
                        txtHtml += "<td class='col_locacao'>" + resultado[i]["data_locacao"] + "</td>";
                        txtHtml += "<td class='col_devolucao'>" + resultado[i]["data_devolucao"] + "</td>";
                        txtHtml += "<td class='col_devolvido'>" + resultado[i]["data_devolvido"] + "</td>";
                        txtHtml += "<td class='col_diaria'>" + resultado[i]["diaria"] + "</td>";
                        // txtHtml += "<td class='col_funcionario'>" + resultado[i][10] + "</td>";
                        txtHtml += "<td class='col_cliente'>" + resultado[i]["cliente"] + "</td>";
                        txtHtml += "<td class='col_livro'>" + resultado[i]["titulo"] + "</td>";
                        if (resultado[i]["ativo"] == 1) {
                            txtHtml += "<td class='col_ativo'>Sim</td>";
                            txtHtml += "<td><a class='deletar' href='javascript:void(0)'>Devolução</a></td>";
                        }
                        else {
                            txtHtml += "<td class='col_ativo'>Não</td>";
                            txtHtml += "<td><p>Devolvido</p></td>";
                        }
                        txtHtml += "</tr>";

                        let tbody = $('#tabela > tbody');
                        tbody.append(txtHtml);//adiciona os novos elementos
                        if (resultado[i]["ativo"] == 1) {
                            let apagar = $('a[class="deletar"]').last();
                            apagar.click(function () {
                                let ultimaLinha = $('#tabela > tbody > tr').last()

                                $.ajax({
                                    method: 'POST',
                                    url: '/Locação/Remover/',
                                    data: { id: resultado[i]["id"] },
                                    success: function (resposta) {
                                        resposta = JSON.parse(resposta)
                                        if (resposta['status'] == 'Ok')
                                            $('#btnBuscar').trigger('click');
                                    },
                                })
                            });
                        }
                    }
                    erro.hide()
                },
                error: function () {
                    erro.show()
                }
            })
        }
        erro.hide()

    } else {
        erro.show()
    }

})

$('#btnCadastrarFuncionario').click(function () {
    window.location.replace('/Funcionario/Cadastro/');
});

$('#btnCadastrarLivro').click(function () {
    window.location.replace('/Livro/Cadastro/');
});

$('#btnAlugar').click(function () {
    window.location.replace('/Locação/');
});