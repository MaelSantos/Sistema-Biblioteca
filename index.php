<?php

session_start();
if(isset($_SESSION['logado'])) {
    header("Location: view/inicio.php");
} 
else if(isset($_SESSION['admin'])) {
    header("Location: view/admin.php");
}
?>

<!DOCTYPE html>

<html lang="pt-br">

    <head>
        <meta charset="utf-8">
        <title>Sistema Biblioteca</title>
        <link href="view/css/reset.css" rel="stylesheet">
        <link href="view/css/componentes.css" rel="stylesheet">
        <link href="view/css/aparencia.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lusitana" rel="stylesheet">
    </head>

    <body>
        <header> <!--cabeçalho-->
            <div>
                <h1 class="titulo"><a href="index.php" alt="Pagina Inicial">Sistema Biblioteca</a></h1>
            </div>
            <nav id="barra-menu"> <!--junção de links-->
                <ul>
                    <li><a href="index.php" alt="Pagina Inicial">Inicio</a></li>
                    <li><a href="view/sobre.php" alt="Sobre">Sobre</a></li>
                    <li><a href="view/contatos.php" alt="Contatos">Contatos</a></li>
                    <li><a href="view/login.php" alt="Login">Login</a></li>
                    <li><a href="view/cadastro_cliente.php" alt="Cadastro">Cadastro</a></li>
                </ul>
            </nav>
        </header>

        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
            <a href="view/login_funcionario.php" alt="Funcionario">Funcionario</a>
        </footer>
    </body>
    
</html>