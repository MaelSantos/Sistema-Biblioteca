
<?php

session_start();//pego a session
unset($_SESSION);
unset($_COOKIE);//removo os cookies
session_destroy();//removo a session

header("Location: ../index.php");//retorno para pagina inicial