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
                        txtHtml += "<td><a class='editar' href='javascript:void(0)'>Editar</a><a class='remover' href='javascript:void(0)'>Remover</a></td>";

                    txtHtml += "</tr>";

                    // console.log(txtHtml)
                    let tbody = $('#tabela > tbody');
                    tbody.append(txtHtml);//adiciona os novos elementos
                    let ultimaLinha = tbody.last('tr');
                    if (sessionStorage.getItem('logado') != null) {
                        // let reservar = ultimaLinha.parent('.reservar');
                        let reservar = $('a[class="reservar"]').last();
                        reservar.click(function () {
                            $(location).attr('href', '/Livro/Reserva/' + livros[i]["codigo"]+'/'+sessionStorage.getItem('logado'));
                        });
                    }
                    else {
                        let apagar = $('a[class="remover"]').last();
                        // let apagar = ultimaLinha.parent('.remover');

                        apagar.click(function () {
                            let linha = this.parent().parent();

                            // let xA = new XMLHttpRequest();
                            // let urlX = '../controle/controle_livro.php';
                            // let paramsX = 'op=remover&id=' + livros[i]["id"] + '&autor=0&titulo=0&ano=0&editora=0&codigo=0&quantidade=0&disponivel=0';
                            // xA.open("POST", urlX, true);
                            // xA.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            // xA.send(paramsX);

                            linha.remove();
                        });

                        // let editar = ultimaLinha.querySelector('.editar');
                        // editar.addEventListener('click', function () {
                        //     let linhaTr = this.parentNode.parentNode;
                        //     let colunaCodigo = linhaTr.querySelector('.col_codigo');
                        //     let colunaTitulo = linhaTr.querySelector('.col_titulo');
                        //     let colunaAutor = linhaTr.querySelector('.col_autor');
                        //     let colunaAno = linhaTr.querySelector('.col_ano');
                        //     let colunaEditora = linhaTr.querySelector('.col_editora');
                        //     let colunaDisponivel = linhaTr.querySelector('.col_disponivel');

                        //     if (colunaCodigo.querySelectorAll('input').length > 0) {
                        //         // terminando de editar
                        //         let codigo = colunaCodigo.querySelector('input').val();
                        //         let editora = colunaEditora.querySelector('input').val();
                        //         let ano = colunaAno.querySelector('input').val();
                        //         let autor = colunaAutor.querySelector('input').val();
                        //         let titulo = colunaTitulo.querySelector('input').val();
                        //         let disponivel = colunaDisponivel.querySelector('input').val();

                        //         var xhrEditar = new XMLHttpRequest();
                        //         xhrEditar.addEventListener('load', function () {
                        //             let erro = $("#form-erro");

                        //             let retorno = this.responseText.trim();
                        //             if (retorno == 'Sucesso') {
                        //                 colunaAno.innerHTML = ano;
                        //                 colunaAutor.innerHTML = autor;
                        //                 colunaCodigo.innerHTML = codigo;
                        //                 colunaDisponivel.innerHTML = disponivel;
                        //                 colunaEditora.innerHTML = editora;
                        //                 colunaTitulo.innerHTML = titulo;
                        //                 editar.innerHTML = "Editar";

                        //                 erro.style = 'display: none';
                        //                 sucesso.style = 'display: initial';

                        //             } else {
                        //                 erro.textContent = 'Erro ao atualizar';
                        //                 erro.style = 'display: initial';
                        //             }
                        //         });

                        //         let url = '../controle/controle_livro.php';
                        //         let params = 'op=editar&id=' + livros[i]["id"] + '&autor=' + autor + '&titulo='
                        //             + titulo + '&ano=' + ano + '&editora=' + editora + '&codigo=' + codigo + '&quantidade=' + disponivel + '&disponivel=' + disponivel;
                        //         xhrEditar.open("POST", url, true);
                        //         xhrEditar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        //         xhrEditar.send(params);

                        //     } else {
                        //         // iniciando a edição
                        //         editar.innerHTML = "Salvar";
                        //         colunaCodigo.innerHTML = "<input type='text' val()='" + colunaCodigo.textContent + "'>";
                        //         colunaEditora.innerHTML = "<input type='text' val()='" + colunaEditora.textContent + "'>";
                        //         colunaAno.innerHTML = "<input type='text' val()='" + colunaAno.textContent + "'>";
                        //         colunaAutor.innerHTML = "<input type='text' val()='" + colunaAutor.textContent + "'>";
                        //         colunaTitulo.innerHTML = "<input type='text' val()='" + colunaTitulo.textContent + "'>";
                        //         colunaDisponivel.innerHTML = "<input type='text' val()='" + colunaDisponivel.textContent + "'>";
                        //     }
                        // });
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