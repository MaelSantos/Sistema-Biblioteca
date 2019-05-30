<?php

session_start();
if(isset($_SESSION['admin'])) {
} else {
    $_SESSION['falhou'] = 'sim';
    header("Location: ../index.php");
}
?>

<!DOCTYPE html>

<html lang="pt-br">

    <head>
        <meta charset="utf-8">
        <title>Sistema Biblioteca</title>
        <link href="css/reset.css" rel="stylesheet">
        <link href="css/aparencia.css" rel="stylesheet">
        <link href="css/componentes.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lusitana" rel="stylesheet">
    </head>

    <body>
        <header> <!--cabeçalho-->
            <div>
                <h1 class="titulo"><a href="../index.php" alt="Pagina Principal">Sistema Biblioteca</a></h1>
            </div>
            
            <nav id="barra-menu"> <!--junção de links-->
                <ul>
                    <li><a href="admin.php" alt="Pagina Inicial">Inicio</a></li>
                    <li><a href="" alt="Sobre">Sobre</a></li>
                    <li><a href="contatos.php" alt="Contatos">Contatos</a></li>
                    <li><a id="link-perfil" href="javascript:void(0)" alt="Perfil">Perfil</a></li>
                    <li><a id="link-sair" href="javascript:void(0)" alt="Sair">Sair</a></li>
                </ul>
            </nav>
        </header>

        <div class="corpo-form">
            <!--Mensagens de notificação-->
            <div id="form-erro"></div>
            <div id="form-sucesso">Cadastrado com Sucesso!</div>
            <form name="cadastro_form" method="POST" action=""> <!--formulario-->
                
                <label for="datLocacao">Data de locação</label>
                <input type="date" placeholder="Data de locação" name="datLocacao" id="datLocacao">

                <label for="datDevolucao">Data de Devolução</label>
                <input type="date" placeholder="Data de Devolução" name="datDevolucao" id="datDevolucao">
                
                <label for="txtDiaria">Diaria</label>
                <input type="text" name="txtDiaria" id="txtDiaria" placeholder="Diaria" >

                <label for="txtLivro">Livro</label>
                <input type="text" name="txtLivro" id="txtLivro" placeholder="Livro" >
                
                <label for="txtCliente">Cliente</label>
                <input type="text" name="txtCliente" id="txtCliente" placeholder="Cliente">

                <label for="txtFuncionario">Funcionario</label>
                <input type="text" name="txtFuncionario" id="txtFuncionario" placeholder="Funcionario" >

                <input type="button" id="btnCadastrar" name="btnCadastrar" value="Cadastrar">
            </form>
        </div>
        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
        </footer>
        <script src="js/aluga.js"></script>
    </body>

</html>