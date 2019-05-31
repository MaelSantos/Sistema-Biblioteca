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
$cliente->setAtivo(true);

$daoCliente = new DaoCliente();

try {
    if ($op == "salvar") {
        $r = $daoCliente->salvar($cliente);
        if($r == true)
            echo "Sucesso";
    }
    if ($op == "editar") {
        session_start();
        $cliente->setId($_SESSION['id']);
        $daoCliente->editar($cliente);
        echo "Sucesso";
    }
    if ($op == "login") {
        $id = $daoCliente->buscar($cliente);
        if($id != null)
        {
            session_start(); 
            $_SESSION["logado"] = $cliente->getLogin();//Define que existe um usuário logado
            $_SESSION["id"] = $id; //Define que existe um usuário logado
            echo "Sucesso";
        }
        else
            echo "Falha";

    }
    if ($op == "buscabusca") {
        $clientes = $daoCliente->busca_por_busca($cliente);
        echo json_encode($clientes); 
    }
    if ($op == "buscaid") {
        session_start();
        $clientes = $daoCliente->buscar_por_id($_SESSION['id']);
        echo json_encode($clientes); 
    }
    if ($op == "remover") {
        $cli = $daoCliente->buscar_por_cpf($_POST["cpf"]);
        $daoCliente->remover($cli);
    }
    if ($op == "removerid") {
        session_start();
        $cli = $daoCliente->remover($_SESSION['id']);
        $daoCliente->remover($cli);
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
