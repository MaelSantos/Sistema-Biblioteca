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
        $id = $daoCliente->buscar($cliente);
        if($id != null)
        {
            session_start(); 
            $_SESSION["logado"] = $cliente->getLogin();//Define que existe um usuário logado
            $_SESSION["id"] = $id; //Define que existe um usuário logado
            echo "Sucesso";
        }
    }
    if ($op == "buscabusca") {
        $clientes = $daoCliente->busca_por_busca($cliente);
        echo json_encode($clientes);
    }
    if ($op == "remover") {
        $daoCliente->remover($cliente);
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
