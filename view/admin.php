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
                <h1 class="titulo"><a href="admin.php" alt="Pagina Principal">Sistema Biblioteca</a></h1>
            </div>
            
            <nav id="barra-menu"> <!--junção de links-->
                <ul>
                    <li><a href="admin.php" alt="Pagina Inicial">Inicio</a></li>
                    <li><a href="" alt="Sobre">Sobre</a></li>
                    <li><a href="contatos.php" alt="Contatos">Contatos</a></li>
                </ul>
            </nav>
            <nav id="barra-acesso"> <!--junção de links-->
                <ul>
                    <li><a id="link-sair" href="javascript:void(0)" alt="Sair">Sair</a></li>
                    <li><a id="link-perfil" href="javascript:void(0)" alt="Perfil">Perfil</a></li>
                </ul>
            </nav>
        </header>
        <div class="form-opcoes">
            <!--Mensagens de notificação-->
            <div id="form-erro"></div>
            <form class="busca"> <!--Formulario de busca-->
                <input type="text" id="txtBuscar" name="txtBuscar" placeholder="Buscar">
                <input type="button" id="btnBuscar" name="Buscar" value="Buscar">
                <!-- <label for="cbxTipo">Tipo:</label> -->
                <select name="cbxTipo" id="cbxTipo">
                    <option value="cliente">Cliente</option>
                    <option value="funcionario">Funcionario</option>
                    <option value="alugado">Alugado</option>
                </select>
                <input type="button" id="btnAlugar" name="btnAlugar" value="Alugar Livro">
                <input type="button" id="btnCadastrarLivro" name="btnCadastrarLivro" value="Cadastrar Livro">
                <input type="button" id="btnCadastrarFuncionario" name="btnCadastrarFuncionario" value="Cadastrar Funcionario">
            </form>
        </div>

        <table class="tabela" border="1px" cellpadding="5px" cellspacing="0"> <!--Tabela de livros-->
            <thead>
            </thead>
            <tbody>
            </tbody>
        </table>
        <script src="js/admin.js"></script>
        <script src="js/logout.js"></script>
        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
        </footer>
    </body>
</html>