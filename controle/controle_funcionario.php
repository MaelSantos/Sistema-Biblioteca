<?php
require_once '../dao/dao_funcionario.php';
require_once '../model/funcionario.php';

$op = $_GET["op"];

$funcionario = new Funcionario();
$funcionario->setNome($_GET["nome"]);
$funcionario->setCargo($_GET["cargo"]);
$funcionario->setEmail($_GET["email"]);
$funcionario->setLogin($_GET["login"]);
$funcionario->setSenha($_GET["senha"]);

$daoFuncionario = new DaoFuncionario();

try {
    if ($op == "salvar") {
        $daoFuncionario->salvar($funcionario);
        echo "Sucesso";
    }
    if ($op == "editar") {
        $daoFuncionario->editar($funcionario);
        echo "Sucesso";
    }
    if ($op == "buscar") {
        $daoFuncionario->buscar($funcionario);
        echo "Sucesso";
    }
    if ($op == "remover") {
        $daoFuncionario->remover($funcionario);
        echo "Sucesso";
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
