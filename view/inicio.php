<?php

session_start();
if(isset($_SESSION['logado'])) {
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

        <div>
            <h1>Livros alugados</h1>
            <table class="tabela" border="1px" cellpadding="5px" cellspacing="0"> <!--Tabela de livros-->
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
                    <tr>
                        <td class='col_codigo'>0001-A</td>
                        <td class='col_titulo'>Os que não foram</td>
                        <td class='col_autor'>Ninguem Importante</td>
                        <td class='col_ano'>2019</td>
                        <td class='col_editora'>Sei la bixo</td>
                        <td class='col_disponivel'>100</td>
                        <td><a class='editar' href='javascript:void(0)'>Editar</a> / <a class='excluir' href='javascript:void(0)'>Excluir</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    <script src="js/inicio.js"></script>
    <script src="js/logout.js"></script>
</html>