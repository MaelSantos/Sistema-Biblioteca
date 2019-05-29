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
                <h1 class="titulo"><a href="../index.html" alt="Pagina Principal">Sistema Biblioteca</a></h1>
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

        <div class="corpo-form">
            <!--Mensagens de notificação-->
            <div id="form-erro"></div>
            <div id="form-sucesso">Cadastrado com sucesso!</div>
            <form name="cadastro_form" method="POST" action=""> <!--formulario-->
                
                <label for="txtNome">Nome</label>
                <input type="text" placeholder="Nome" name="txtNome" id="txtNome">

                <label for="txtEmail">Email</label>
                <input type="text" name="txtEmail" id="txtEmail" placeholder="Email" >

                <label for="txtCargo">Cargo</label>
                <input type="text" name="txtCargo" id="txtCargo" placeholder="Cargo" >
                
                <label for="txtLogin">Login</label>
                <input type="text" placeholder="Login" name="txtLogin" id="txtLogin">

                <label for="txtSenha">Senha</label>
                <input type="password" name="txtSenha" id="txtSenha" placeholder="Senha" >

                <label for="txtConfirmaSenha">Confirmar Senha</label>
                <input type="password" name="txtConfirmaSenha" id="txtConfirmaSenha" placeholder="Confirmar Senha">

                <input type="button" id="btnCadastrar" name="btnCadastrar" value="Cadastrar">
            </form>
        </div>
        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
        </footer>
        <script src="js/cadastro_funcionario.js"></script>
        <script src="js/logout.js"></script>
    </body>

</html>