<?php
require_once '../dao/dao_cliente.php';
require_once '../model/cliente.php';

$op = $_GET["op"];

$cliente = new Cliente();
$cliente->setNome($_GET["nome"]);
$cliente->setCpf($_GET["cpf"]);
$cliente->setEmail($_GET["email"]);
$cliente->setTelefone($_GET["telefone"]);
$cliente->setLogin($_GET["login"]);
$cliente->setSenha($_GET["senha"]);

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
    if ($op == "buscar") {
        $r = $daoCliente->buscar($cliente);
        if($r == true)
            echo "Sucesso";
    }
    if ($op == "remover") {
        $daoCliente->remover($cliente);
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
