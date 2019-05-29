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
                    <li><a href="../index.php" alt="Pagina Inicial">Inicio</a></li>
                    <li><a href="" alt="Sobre">Sobre</a></li>
                    <li><a href="contatos.php" alt="Contatos">Contatos</a></li>
                </ul>
            </nav>
        </header>

        <div class="corpo-form">
            <div id="form-erro"></div> <!--Mensagem de erro-->
            <form name="login_form" method="GET" action=""> <!--formulario-->
                <label for="txtLogin">Login:</label>
                <input type="text" id="txtLogin" name="txtLogin" placeholder="Login" >

                <label for="txtSenha">Senha:</label>
                <input type="password" id="txtSenha" name="txtSenha" placeholder="Senha" >

                <input type="button" id="btnEntrar" name="btnEntrar" value="Entrar">
                <a href="cadastro_cliente.php" alt="Cadastro">Ainda não é cadastrado? <strong>Cadastre-se!</strong></a></li>
            </form>
        </div>
        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
        </footer>
    </body>
    <script src="js/login_cliente.js"></script>
</html>