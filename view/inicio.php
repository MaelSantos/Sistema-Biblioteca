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
                <h1 class="titulo"><a href="inicio.php" alt="Pagina Principal">Sistema Biblioteca</a></h1>
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

        <div class="form-opcoes">
            <h1><strong>Livros alugados</strong></h1>
            <table id="alugados" class="tabela" border="1px" cellpadding="5px" cellspacing="0"> <!--Tabela de livros-->
                <thead>
                <tr>
                    <th>Livro</th>
                    <th>Locação</th>
                    <th>Devolução</th>
                    <th>Diaria</th>
                    <th>Cliente</th>
                    <th>Funcionario</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <h1><strong>Livros reservados</strong></h1>
            <table id="reservados" class="tabela" border="1px" cellpadding="5px" cellspacing="0"> <!--Tabela de livros-->
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Reserva</th>
                        <th>Retirada</th>
                        <th>Cliente</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <h1><strong>Locações atrazadas<strong></h1>
            <table id="atrasados" class="tabela" border="1px" cellpadding="5px" cellspacing="0"> <!--Tabela de livros-->
                <thead>
                    <tr>
                        <th>Livro</th>
                        <th>Locação</th>
                        <th>Devolução</th>
                        <th>Diaria</th>
                        <th>Cliente</th>
                        <th>Funcionario</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
        </footer>
    </body>
    <script src="js/inicio.js"></script>
    <script src="js/logout.js"></script>
</html>