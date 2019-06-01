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
                    <li><a id="link-perfil" href="javascript:void(0)" alt="Perfil">Perfil</a></li>
                    <li><a id="link-sair" href="javascript:void(0)" alt="Sair">Sair</a></li>
                </ul>
            </nav>
        </header>

        <div class="form-opcoes">
            <table id="perfil" class="tabela" border="1px" cellpadding="5px" cellspacing="0"> <!--Tabela de livros-->
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div class="perfil-container">
            <!--Mensagens de notificação-->
            <div id="form-erro"></div>
            <div id="form-sucesso">Atualizado com sucesso!</div>
            <form id="perfil_form" name="perfil_form" method="POST" action=""> <!--formulario-->
                <div class="perfil">
                    <input type="button" id="btnApagar" name="btnApagar" value="Apagar Conta">
                </div>
                <div class="perfil">
                    <input type="button" id="btnEditar" name="btnEditar" value="Editar">
                </div>
                <div class="perfil-button">
                    <label for="txtSenha">Senha</label>
                    <input type="password" name="txtSenha" id="txtSenha" placeholder="Senha" >
                    <label for="txtConfirmaSenha">Confirmar Senha</label>
                    <input type="password" name="txtConfirmaSenha" id="txtConfirmaSenha" placeholder="Confirmar Senha">
                    <input type="button" id="btnSenha" name="btnSenha" value="Alterar Senha">
                </div>
            </form>
        </div>
        <footer>  <!--rodapé-->
            <p>&copy; Todos os direitos são reservados.</p>
        </footer>
        <script src="js/logout.js"></script>
        <script src="js/perfil.js"></script>
    </body>

</html>
