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
                <h1 class="titulo"><a href="../index.html" alt="Pagina Principal">Sistema Biblioteca</a></h1>
            </div>
            
            <nav id="barra-menu"> <!--junção de links-->
                <ul>
                    <li><a href="../index.html" alt="Pagina Inicial">Inicio</a></li>
                    <li><a href="" alt="Sobre">Sobre</a></li>
                    <li><a href="contatos.html" alt="Contatos">Contatos</a></li>
                </ul>
            </nav>
            <nav id="barra-acesso"> <!--junção de links-->
                <ul>
                    <li><a id="link-sair" href="javascript:void(0)" alt="Sair">Sair</a></li>
                    <li><a id="link-perfil" href="javascript:void(0)" alt="Perfil">Perfil</a></li>
                </ul>
            </nav>
        </header>

        <div class="corpo-form">
            <!--Mensagens de notificação-->
            <div id="form-erro"></div>
            <div id="form-sucesso">Preencha todos os dados!</div>
            <form name="cadastro_form" method="POST" action=""> <!--formulario-->
                
                <label id="lblRetirada">Data de retirada</label>

                <label id="lblReserva">Data de Reserva</label>

                <label id="lblCliente">Cliente:</label>

                <label id="lblLivro">Livro:</label>

                <input type="button" id="btnConfirmar" name="btnConfimar" value="Confirmar">

            </form>
        </div>

        <script src="js/reserva.js"></script>
        <script src="js/logout.js"></script>
    </body>

</html>