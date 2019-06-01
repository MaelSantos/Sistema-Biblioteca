<!DOCTYPE html>
<html lang="pt-br">

    <head>
        <meta charset="utf-8">
        <title>Sistema Biblioteca</title>
        <link href="css/reset.css" rel="stylesheet">
        <link href="css/componentes.css" rel="stylesheet">
        <link href="css/aparencia.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lusitana:400,700&display=swap" rel="stylesheet">
    </head>

    <body>
        <header> <!--cabeçalho-->
            <div>
                <h1 class="titulo"><a href="../index.php" alt="Pagina Principal">Sistema Biblioteca</a></h1>
            </div>

            <nav id="barra-menu"> <!--junção de links-->
                <ul>
                    <li><a href="../index.php" alt="Pagina Inicial">Inicio</a></li>
                    <?php
                    session_start();
                    if (isset($_SESSION["logado"]) || isset($_SESSION["admin"])) {
                        echo '<li><a href="acervo.php" alt="Acervo">Acervo</a></li>';
                    }
                    ?>
                    <li><a href="sobre.php" alt="Sobre">Sobre</a></li>
                    <li><a href="contatos.php" alt="Contatos">Contatos</a></li>

                    <?php
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
            <p>Sistema desenvolvido para disciplina de projeto de sistemas web (PSD)<p>
            <p>Discente: Abimael Jonas F. dos Santos</p>
            <p>Docente: Ygor Amaral Barbosa Leite de Sena</p>
            <p>Curso de Bacharelado em sistemas de informação</p>
            <p>Unidade Acadêmica de Serra Talhada</p>
            <p>Universidade Federal Rural De Pernambuco</p>
            <p>UAST/UFRPE<p>
        </main>
        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
        </footer>
    </body>
    <script src="js/logout.js"></script>
</html>