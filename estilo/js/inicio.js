
//Alugados
$.ajax({
    method: 'POST',
    url: '/Locação/Buscar/',
    success: function (resposta) {
        let resultado = JSON.parse(resposta)

        let tr = $('#alugados > tbody > tr');
        for (let i = 0; i < tr.length; i++)
            tr[i].remove() //remove elementos existentes na tabela

        for (let i = 0; i < resultado.length; i++) {
            //prepara os dados a serem adicionados
            let txtHtml = "<tr>";
            txtHtml += "<td class='col_id'>" + resultado[i]["id"] + "</td>";
            txtHtml += "<td class='col_livro'>" + resultado[i]["titulo"] + "</td>";
            txtHtml += "<td class='col_locacao'>" + resultado[i]["data_locacao"] + "</td>";
            txtHtml += "<td class='col_devolucao'>" + resultado[i]["data_devolucao"] + "</td>";
            txtHtml += "<td class='col_diaria'>" + resultado[i]["diaria"] + "</td>";
            txtHtml += "<td class='col_cliente'>" + resultado[i]["funcionario"] + "</td>";
            txtHtml += "<td class='col_funcionario'>" + resultado[i]["cliente"] + "</td>";
            txtHtml += "</tr>";

            let tbody = $('#alugados > tbody');
            tbody.append(txtHtml);//adiciona os novos elementos
        }
    },
})

//Reservados
$.ajax({
    method: 'POST',
    url: '/Livro/Reserva/Buscar/',
    success: function (respostas) {
        let resultado = JSON.parse(respostas);//passa para uma lista os arquivos do JSON

        let tr = $('#reservados > tbody > tr');
        for (let i = 0; i < tr.length; i++)
            tr[i].remove() //remove elementos existentes na tabela

        for (let i = 0; i < resultado.length; i++) {
            //prepara os dados a serem adicionados
            let txtHtml = "<tr>";
            txtHtml += "<td class='col_id'>" + resultado[i]["id"] + "</td>";
            txtHtml += "<td class='col_livro'>" + resultado[i]["titulo"] + "</td>";
            txtHtml += "<td class='col_locacao'>" + resultado[i]["data_reserva"] + "</td>";
            txtHtml += "<td class='col_devolucao'>" + resultado[i]["data_retirada"] + "</td>";
            txtHtml += "<td class='col_cliente'>" + resultado[i]["nome"] + "</td>";
            txtHtml += "<td><a class='cancelar' href='javascript:void(0)'>Cancelar</a></td>";
            txtHtml += "</tr>";

            let tbody = $('#reservados > tbody');
            tbody.append(txtHtml);//adiciona os novos elementos
            let apagar = $('a[class="cancelar"]').last()
            
            apagar.click(function () {
                let ultimaLinha = $('#reservados > tbody > tr').last()

                $.ajax({
                    method: 'POST',
                    url: '/Livro/Reserva/Cancelar/',
                    data: { id: resultado[i]["id"] },
                    success: function (resposta) {
                        resposta = JSON.parse(resposta)
                        if (resposta['status'] == 'Ok')
                            ultimaLinha.remove()
                    },
                })
            });
        }
    },
})

// //Atrasados
$.ajax({
    method: 'POST',
    url: '/Locação/Buscar/Atrasados',
    data: {},
    success: function (resposta) {
        let resultado = JSON.parse(resposta)

        let tr = $('#atrasados > tbody > tr');
        for (let i = 0; i < tr.length; i++)
            tr[i].remove() //remove elementos existentes na tabela

        for (let i = 0; i < resultado.length; i++) {
            //prepara os dados a serem adicionados
            let txtHtml = "<tr>";
            txtHtml += "<td class='col_id'>" + resultado[i]["id"] + "</td>";
            txtHtml += "<td class='col_livro'>" + resultado[i]["titulo"] + "</td>";
            txtHtml += "<td class='col_locacao'>" + resultado[i]["data_locacao"] + "</td>";
            txtHtml += "<td class='col_devolucao'>" + resultado[i]["data_devolucao"] + "</td>";
            txtHtml += "<td class='col_diaria'>" + resultado[i]["diaria"] + "</td>";
            txtHtml += "<td class='col_cliente'>" + resultado[i][9] + "</td>";
            txtHtml += "<td class='col_funcionario'>" + resultado[i][10] + "</td>";
            txtHtml += "</tr>";

            let tbody = $('#atrasados > tbody');
            tbody.append(txtHtml);//adiciona os novos elementos
        }
    },
})
