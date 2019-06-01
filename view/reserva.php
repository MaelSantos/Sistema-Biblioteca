<?php

session_start();
if(isset($_SESSION['logado'])) {
} else {
    $_SESSION['falhou'] = 'sim';
    header("Location: ../index.php");
}

try { //força a entrada somente se informar os dados do cliente e do livro
    $livro = $_GET['livro'];

    if($livro == null)
        header("Location: acervo.php");

} catch (\Throwable $th) {
    header("Location: acervo.php");
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
                    <li><a href="sobre.php" alt="Sobre">Sobre</a></li>
                    <li><a href="contatos.php" alt="Contatos">Contatos</a></li>
                    <li><a id="link-sair" href="javascript:void(0)" alt="Sair">Sair</a></li>
                    <li><a id="link-perfil" href="javascript:void(0)" alt="Perfil">Perfil</a></li>
                </ul>
            </nav>
        </header>

        <div class="corpo-form">
            <!--Mensagens de notificação-->
            <div id="form-erro"></div>
            <div id="form-sucesso">Reservado com sucesso!</div>
            <form name="cadastro_form" method="POST" action=""> <!--formulario-->
            
            <label for="txtReserva">Data de Reserva</label>
            <input type="date" id="txtReserva" name="txtReserva" placeholder="Data de Reserva">
            
            <label>Data de Retirada</label>
            <input type="date" id="txtRetirada" name="txtRetirada" placeholder="Data de Retirada">

            <label for="txtCliente">Cliente:</label>
            <input type="text" id="txtCliente" name="txtCliente" placeholder="Cliente" value=<?php echo $_SESSION['logado']?>>
            
            <label for="txtLivro">Livro:</label>
            <input type="text" id="txtLivro" name="txtLivro" placeholder="Livro" value=<?php echo $livro?> >
            
            <input type="button" id="btnConfirmar" name="btnConfimar" value="Confirmar">

            </form>
        </div>
        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
        </footer>
        <script src="js/reserva.js"></script>
        <script src="js/logout.js"></script>
    </body>

</html>