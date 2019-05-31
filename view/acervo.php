<?php

session_start();
if(isset($_SESSION['logado']) || isset($_SESSION['admin'])) {
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
                    <li><a href="inicio.php" alt="Pagina Inicial">Inicio</a></li>
                    <li><a href="acervo.php" alt="Acervo">Acervo</a></li>
                    <li><a href="sobre.php" alt="Sobre">Sobre</a></li>
                    <li><a href="contatos.php" alt="Contatos">Contatos</a></li>
                    <li><a id="link-perfil" href="javascript:void(0)" alt="Perfil">Perfil</a></li>
                    <li><a id="link-sair" href="javascript:void(0)" alt="Sair">Sair</a></li>
                </ul>
            </nav>
        </header>
        <div class="corpo-form">
            <!--Mensagens de notificação-->
            <div id="form-erro"></div>
            <div id="form-sucesso">Atualizado com sucesso!</div>
            <form class="buscaPadrao"> <!--Formulario de busca-->
                <input type="text" id="txtBuscar" name="txtBuscar" placeholder="Buscar">
                <input type="button" id="btnBuscar" name="Buscar" value="Buscar">
            </form>
        </div>

        <table class="tabela" border="1px" cellpadding="5px" cellspacing="0"> <!--Tabela de livros-->
            <caption>Livros</caption>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Ano</th>
                    <th>Editora</th>
                    <th>Disponiveis</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
        </footer>
        <script src="js/acervo.js"></script>
        <script src="js/logout.js"></script>
    </body>
</html>