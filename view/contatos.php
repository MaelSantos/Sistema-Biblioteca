<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <meta charset="utf-8">
        <title>Sistema Biblioteca</title>
        <link href="css/reset.css" rel="stylesheet">
        <link href="css/componentes.css" rel="stylesheet">
        <link href="css/aparencia.css" rel="stylesheet">
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
                    <li><a href="../index.php" alt="Pagina Inicial">Inicio</a></li>
                    <li><a href="" alt="Sobre">Sobre</a></li>
                    <li><a href="contatos.php" alt="Contatos">Contatos</a></li>

                    <?php
                    session_start();
                    if (isset($_SESSION["logado"]) || isset($_SESSION["admin"])) {
                        echo '<li><a id="link-perfil" href="javascript:void(0)" alt="Perfil">Perfil</a></li>
                                                <li><a id="link-sair" href="javascript:void(0)" alt="Sair">Sair</a></li>';
                    } else {
                        echo '<li><a href="login.php" alt="Login">Login</a></li>
                                                <li><a href="cadastro_cliente.php" alt="Cadastro">Cadastro</a></li>';
                        }

                    ?>
                </ul>
            </nav>
        </header>

        <main id="contatos">
            <p>ABIMAEL JONAS FURTUOSO DOS SANTOS<p>
            <p>DISCENTE NO CURSO BACHARELADO EM SITEMAS DE INFORMAÇÃO</p>
            <p>UNIDADE ACADÊMICA DE SERRA TALHADA / UNIVERSIDADE FEDERAL RURAL DE PERNANBUCO</p>
            <p>CONTATOS:<p>
            <p>Telefone: (88)9 8116-9372</p>
            <p>Email: maelsantos777@gmail.com</p>
            <a href="https://www.facebook.com/profile.php?id=100014350898752" alt="CafePraza" target="_blank">Ir para Facebook</a>
        </main>
        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
        </footer>
    </body>
    <script src="js/logout.js"></script>
</html>