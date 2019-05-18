<?php
require_once '../dao/dao_funcionario.php';
require_once '../model/funcionario.php';

$op = $_POST["op"];

$funcionario = new Funcionario();
$funcionario->setNome($_POST["nome"]);
$funcionario->setCargo($_POST["cargo"]);
$funcionario->setEmail($_POST["email"]);
$funcionario->setLogin($_POST["login"]);
$funcionario->setSenha($_POST["senha"]);

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
