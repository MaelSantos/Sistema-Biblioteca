<?php
require_once '../dao/dao_cliente.php';
require_once '../model/cliente.php';

$op = $_POST["op"];

$cliente = new Cliente();
$cliente->setNome($_POST["nome"]);
$cliente->setCpf($_POST["cpf"]);
$cliente->setEmail($_POST["email"]);
$cliente->setTelefone($_POST["telefone"]);
$cliente->setLogin($_POST["login"]);
$cliente->setSenha($_POST["senha"]);

$daoCliente = new DaoCliente();

try {
    if ($op == "salvar") {
        $r = $daoCliente->salvar($cliente);
        if($r == true)
            echo "Sucesso";
    }
    if ($op == "editar") {
        $daoCliente->editar($cliente);
    }
    if ($op == "login") {
        $r = $daoCliente->buscar($cliente);
        if($r == true)
        {
            session_start(); 
            $_SESSION["logado"] = $cliente->getCpf();//Define que existe um usuário logado
            echo "Sucesso";
            // header("Location: ../view/inicio.html");
        }
    }
    if ($op == "remover") {
        $daoCliente->remover($cliente);
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
