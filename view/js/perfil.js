let btnApagar = document.querySelector('#btnApagar');
let btnSenha = document.querySelector('#btnSenha');
let btnEditar = document.querySelector('#btnEditar');
var xhr = new XMLHttpRequest();

xhr.addEventListener('load', function () {//retornar os resultados da busca para a tela
    console.log(this.responseText.trim());
    let resultado = JSON.parse(this.responseText.trim());//passa para uma lista os arquivos do JSON

    let tr = document.querySelectorAll('.tabela > tbody > tr');
    for (let i = 0; i < tr.length; i++)
        tr[i].remove() //remove elementos existentes na tabela

    let th = document.querySelectorAll('.tabela > thead > tr');
    if (th != null)
        for (let i = 0; i < th.length; i++)
            th[i].remove() //remove elementos existentes na tabela

    if (sessionStorage.getItem('logado') != null) {
        let cabecalho = '<tr>';
        cabecalho += '<th>Nome</th>';
        cabecalho += '<th>Login</th>';
        cabecalho += '<th>Email</th>';
        cabecalho += '<th>Cpf</th>';
        cabecalho += '<th>Telefone</th>';
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
            txtHtml += "</tr>";

            let tbody = document.querySelector('.tabela > tbody');
            tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos

        }
    } else {
        let cabecalho = '<tr>';
        cabecalho += '<th>Nome</th>';
        cabecalho += '<th>Login</th>';
        cabecalho += '<th>Email</th>';
        cabecalho += '<th>Cargo</th>';
        cabecalho += '</tr>';

        document.querySelector('.tabela > thead').insertAdjacentHTML('beforeend', cabecalho);//adiciona o cabeçalho

        for (let i = 0; i < resultado.length; i++) {
            //prepara os dados a serem adicionados
            let txtHtml = "<tr>";
            txtHtml += "<td class='col_nome'>" + resultado[i]["nome"] + "</td>";
            txtHtml += "<td class='col_login'>" + resultado[i]["login"] + "</td>";
            txtHtml += "<td class='col_email'>" + resultado[i]["email"] + "</td>";
            txtHtml += "<td class='col_cargo'>" + resultado[i]["cargo"] + "</td>";
            txtHtml += "</tr>";

            let tbody = document.querySelector('.tabela > tbody');
            tbody.insertAdjacentHTML('beforeend', txtHtml);//adiciona os novos elementos
        }
    }

});

if (sessionStorage.getItem('logado') != null) {
    //envia a requisição
    let url = '../controle/controle_cliente.php';
    let params = 'op=buscaid&nome=0&cpf=0&email=0&telefone=0&login=0&senha=0';
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);

}
else if (sessionStorage.getItem('admin') != null) {
    let url = '../controle/controle_funcionario.php';
    let params = 'op=buscaid&nome=0&cargo=0&email=0&login=0&senha=0';
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
}

btnEditar.addEventListener('click', function () {

    if(sessionStorage.getItem('logado') != null)
    {
        let linhaTr = document.querySelector('.tabela > tbody > tr');
        let colunaNome = linhaTr.querySelector('.col_nome');
        let colunaLogin = linhaTr.querySelector('.col_login');
        let colunaEmail = linhaTr.querySelector('.col_email');
        let colunaCpf = linhaTr.querySelector('.col_cpf');
        let colunaTelefone = linhaTr.querySelector('.col_telefone');
    
        if (colunaNome.querySelectorAll('input').length > 0) {
            // terminando de editar
            let nome = colunaNome.querySelector('input').value;
            let telefone = colunaTelefone.querySelector('input').value;
            let cpf = colunaCpf.querySelector('input').value;
            let email = colunaEmail.querySelector('input').value;
            let login = colunaLogin.querySelector('input').value;
    
            var xhrEditar = new XMLHttpRequest();
            xhrEditar.addEventListener('load', function () {
                let erro = document.querySelector("#form-erro");
                let sucesso = document.querySelector("#form-sucesso");
                let retorno = this.responseText.trim();
                if (retorno == 'Sucesso') {
                    colunaCpf.innerHTML = cpf;
                    colunaEmail.innerHTML = email;
                    colunaNome.innerHTML = nome;
                    colunaTelefone.innerHTML = telefone;
                    colunaLogin.innerHTML = login;
                    btnEditar.value = "Editar";
    
                    erro.style = 'display: none';
                    sucesso.style = 'display: initial';
    
                } else {
                    erro.textContent = 'Erro ao atualizar';
                    erro.style = 'display: initial';
                }
            });
    
            let url = '../controle/controle_cliente.php';
            let params = 'op=editar&nome='+nome+'&cpf='+cpf+'&email='+email+'&telefone='+telefone+'&login='+login+'&senha=0';
            xhrEditar.open("POST", url, true);
            xhrEditar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhrEditar.send(params);
    
        } else {
            // iniciando a edição
            btnEditar.value = "Salvar";
            colunaNome.innerHTML = "<input type='text' value='" + colunaNome.textContent + "'>";
            colunaTelefone.innerHTML = "<input type='text' value='" + colunaTelefone.textContent + "'>";
            colunaCpf.innerHTML = "<input type='text' value='" + colunaCpf.textContent + "'>";
            colunaEmail.innerHTML = "<input type='text' value='" + colunaEmail.textContent + "'>";
            colunaLogin.innerHTML = "<input type='text' value='" + colunaLogin.textContent + "'>";
        }
    }
    else if(sessionStorage.getItem('admin')){

        let linhaTr = document.querySelector('.tabela > tbody > tr');
        let colunaNome = linhaTr.querySelector('.col_nome');
        let colunaLogin = linhaTr.querySelector('.col_login');
        let colunaEmail = linhaTr.querySelector('.col_email');
        let colunaCargo = linhaTr.querySelector('.col_cargo');
    
        if (colunaNome.querySelectorAll('input').length > 0) {
            // terminando de editar
            let nome = colunaNome.querySelector('input').value;
            let cargo = colunaCargo.querySelector('input').value;
            let email = colunaEmail.querySelector('input').value;
            let login = colunaLogin.querySelector('input').value;
    
            var xhrEditar = new XMLHttpRequest();
            xhrEditar.addEventListener('load', function () {
                let erro = document.querySelector("#form-erro");
                let sucesso = document.querySelector("#form-sucesso");
                let retorno = this.responseText.trim();
                if (retorno == 'Sucesso') {
                    colunaCargo.innerHTML = cargo;
                    colunaEmail.innerHTML = email;
                    colunaNome.innerHTML = nome;
                    colunaLogin.innerHTML = login;
                    btnEditar.value = "Editar";
    
                    erro.style = 'display: none';
                    sucesso.style = 'display: initial';
    
                } else {
                    erro.textContent = 'Erro ao atualizar';
                    erro.style = 'display: initial';
                }
            });
    
            let url = '../controle/controle_funcionario.php';
            let params = 'op=editar&nome='+nome+'&cargo='+cargo+'&email='+email+'&login='+login+'&senha=0';
            xhrEditar.open("POST", url, true);
            xhrEditar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhrEditar.send(params);
    
        } else {
            // iniciando a edição
            btnEditar.value = "Salvar";
            colunaNome.innerHTML = "<input type='text' value='" + colunaNome.textContent + "'>";
            colunaCargo.innerHTML = "<input type='text' value='" + colunaCargo.textContent + "'>";
            colunaEmail.innerHTML = "<input type='text' value='" + colunaEmail.textContent + "'>";
            colunaLogin.innerHTML = "<input type='text' value='" + colunaLogin.textContent + "'>";
        }
    }
});

btnApagar.addEventListener('click', function(){
    var xhrRemove = new XMLHttpRequest();

    if (sessionStorage.getItem('logado') != null) {
        //envia a requisição
        let url = '../controle/controle_cliente.php';
        let params = 'op=removerid&nome=0&cpf=0&email=0&telefone=0&login=0&senha=0';
        xhrRemove.open("POST", url, true);
        xhrRemove.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhrRemove.send(params);
    
        window.location.replace('../controle/logout.php');
    }
    else if (sessionStorage.getItem('admin') != null) {
        let url = '../controle/controle_funcionario.php';
        let params = 'op=removerid&nome=0&cargo=0&email=0&login=0&senha=0';
        xhrRemove.open("POST", url, true);
        xhrRemove.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhrRemove.send(params);

        window.location.replace('../controle/logout.php');
    }
});