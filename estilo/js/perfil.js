
let erro = $("#form-erro");
let sucesso = $("#form-sucesso");
erro.hide()
sucesso.hide()

console.log(sessionStorage.getItem('logado'))
console.log(sessionStorage.getItem('admin'))

if (sessionStorage.getItem('logado') != null) {
    //envia a requisição
    $.ajax({
        method: 'POST',
        url: '/Cliente/Perfil/Buscar/',
        success: function (resposta) {

            let resultado = JSON.parse(resposta);//passa para uma lista os arquivos do JSON

            let tr = $('#tabela > tbody > tr');
            for (let i = 0; i < tr.length; i++)
                tr[i].remove() //remove elementos existentes na tabela

            let th = $('#tabela > thead > tr');
            if (th != null)
                for (let i = 0; i < th.length; i++)
                    th[i].remove() //remove elementos existentes na tabela

            let cabecalho = '<tr>';
            cabecalho += '<th scope="col">#</th>';
            cabecalho += '<th scope="col">Nome</th>';
            cabecalho += '<th scope="col">Login</th>';
            cabecalho += '<th scope="col">Email</th>';
            cabecalho += '<th scope="col">Cpf</th>';
            cabecalho += '<th scope="col">Telefone</th>';
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
                txtHtml += "</tr>";

                let tbody = $('#tabela > tbody');
                tbody.append(txtHtml);//adiciona os novos elementos
                $('#txtSenha').val(resultado[i]["senha"]);
                $('#txtConfirmaSenha').val(resultado[i]["senha"]);
            }
        },
    })
}
else if (sessionStorage.getItem('admin') != null) {
    $.ajax({
        method: 'POST',
        url: '/Funcionario/Perfil/Buscar/',
        success: function (resposta) {

            let resultado = JSON.parse(resposta);//passa para uma lista os arquivos do JSON

            let tr = $('#tabela > tbody > tr');
            for (let i = 0; i < tr.length; i++)
                tr[i].remove() //remove elementos existentes na tabela

            let th = $('#tabela > thead > tr');
            if (th != null)
                for (let i = 0; i < th.length; i++)
                    th[i].remove() //remove elementos existentes na tabela

            let cabecalho = '<tr>';
            cabecalho += '<th scope="col">#</th>';
            cabecalho += '<th scope="col">Nome</th>';
            cabecalho += '<th scope="col">Login</th>';
            cabecalho += '<th scope="col">Email</th>';
            cabecalho += '<th scope="col">Cargo</th>';
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
                txtHtml += "</tr>";

                let tbody = $('#tabela > tbody');
                tbody.append(txtHtml);//adiciona os novos elementos
                $('#txtSenha').val(resultado[i]["senha"]);
                $('#txtConfirmaSenha').val(resultado[i]["senha"]);
            }
        },
    })
}

$('#btnEditar').click(function () {

    if (sessionStorage.getItem('logado') != null) {
        let colunaNome = $('#tabela > tbody > tr > td.col_nome').last();
        let colunaLogin = $('#tabela > tbody > tr > td.col_login').last();
        let colunaEmail = $('#tabela > tbody > tr > td.col_email').last();
        let colunaCpf = $('#tabela > tbody > tr > td.col_cpf').last();
        let colunaTelefone = $('#tabela > tbody > tr > td.col_telefone').last();

        if (colunaNome.children('input').length > 0) {
            // terminando de editar
            let nome = colunaNome.children('input').val().trim();
            let telefone = colunaTelefone.children('input').val().trim();
            let cpf = colunaCpf.children('input').val().trim();
            let email = colunaEmail.children('input').val().trim();
            let login = colunaLogin.children('input').val().trim();
            let senha = $('#txtSenha').val().trim()

            let txtConfirmaSenha = $('#txtConfirmaSenha').val().trim();

            if (senha == txtConfirmaSenha)
                $.ajax({
                    method: 'POST',
                    url: '/Cliente/Editar/',
                    data: { nome: nome, cpf: cpf, email: email, telefone: telefone, login: login, senha: senha },
                    success: function (resposta) {
                        resposta = JSON.parse(resposta)
                        colunaCpf.html(cpf);
                        colunaEmail.html(email);
                        colunaNome.html(nome);
                        colunaTelefone.html(telefone);
                        colunaLogin.html(login);
                        $('#txtSenha').val(senha)
                        $('#btnEditar').val("Editar");

                        sucesso.show()
                        erro.hide()
                    },
                    error: function (resposta) {
                        sucesso.hide()
                        erro.show()

                    }
                })
            else {
                sucesso.hide()
                erro.show()
            }

        } else {
            // iniciando a edição
            $('#btnEditar').val("Salvar");
            colunaNome.html("<input type='text' class='form-control' value='" + colunaNome.html() + "'>");
            colunaTelefone.html("<input type='text' class='form-control' value='" + colunaTelefone.html() + "'>");
            colunaCpf.html("<input type='text' class='form-control' value='" + colunaCpf.html() + "'>");
            colunaEmail.html("<input type='text' class='form-control' value='" + colunaEmail.html() + "'>");
            colunaLogin.html("<input type='text' class='form-control' value='" + colunaLogin.html() + "'>");
        }
    }
    else if (sessionStorage.getItem('admin')) {

        let colunaNome = $('#tabela > tbody > tr > td.col_nome').last();
        let colunaLogin = $('#tabela > tbody > tr > td.col_login').last();
        let colunaEmail = $('#tabela > tbody > tr > td.col_email').last();
        let colunaCargo = $('#tabela > tbody > tr > td.col_cargo').last();

        if (colunaNome.children('input').length > 0) {
            // terminando de editar
            let nome = colunaNome.children('input').val().trim();
            let cargo = colunaCargo.children('input').val().trim();
            let email = colunaEmail.children('input').val().trim();
            let login = colunaLogin.children('input').val().trim();
            let senha = $('#txtSenha').val().trim()

            let txtConfirmaSenha = $('#txtConfirmaSenha').val().trim();

            if (senha == txtConfirmaSenha)
                $.ajax({
                    method: 'POST',
                    url: '/Funcionario/Editar/',
                    data: { nome: nome, cargo: cargo, email: email, login: login, senha: senha },
                    success: function (resposta) {
                        colunaCargo.html(cargo);
                        colunaEmail.html(email);
                        colunaNome.html(nome);
                        colunaLogin.html(login);
                        $('#txtSenha').val(senha)
                        $('#btnEditar').val('Editar');

                        erro.hide()
                        sucesso.show()
                    },
                    error: function (resposta) {
                        sucesso.hide()
                        erro.show()
                    }
                })
            else {
                sucesso.hide()
                erro.show()
            }

        } else {
            // iniciando a edição
            $('#btnEditar').val("Salvar");
            colunaNome.html("<input type='text' class='form-control' value='" + colunaNome.html() + "'>");
            colunaCargo.html("<input type='text' class='form-control' value='" + colunaCargo.html() + "'>");
            colunaEmail.html("<input type='text' class='form-control' value='" + colunaEmail.html() + "'>");
            colunaLogin.html("<input type='text' class='form-control' value='" + colunaLogin.html() + "'>");
        }
    }
});

$('#btnApagar').click(function () {

    let id = $('#tabela > tbody > tr > td.col_id').last().html();

    if (sessionStorage.getItem('logado') != null) {
        //envia a requisição
        $.ajax({
            method: 'POST',
            url: '/Cliente/Remover/',
            data: { id: id },
            success: function (resposta) {
                $(location).attr('href', '/Logout/');
            },
        })

    }
    else if (sessionStorage.getItem('admin') != null) {
        $.ajax({
            method: 'POST',
            url: '/Funcionario/Remover/',
            data: { id: id },
            success: function (resposta) {
                $(location).attr('href', '/Logout/');
            },
        })

    }
});

