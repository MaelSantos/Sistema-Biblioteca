<?php
require_once '../dao/dao_aluga.php';
require_once '../model/aluga.php';

$op = $_POST["op"];

$aluga = new Aluga();
$aluga->setData_locacao($_POST["data_locacao"]);
$aluga->setData_devolucao($_POST["data_devolucao"]);
$aluga->setData_devolvido($_POST["data_devolvido"]);
$aluga->setDiaria($_POST["diaria"]);
$aluga->setAtivo($_POST["ativo"]);
$aluga->setId_funcionario($_POST["id_funcionario"]);
$aluga->setId_cliente($_POST["id_cliente"]);
$aluga->setId_livro($_POST["id_livro"]);


$daoAluga = new DaoAluga();

try {
    if ($op == "salvar") {
        $daoAluga->salvar($aluga);
        echo "Sucesso";
    }
    if ($op == "editar") {
        $daoAluga->editar($aluga);
        echo "Sucesso";
    }
    if ($op == "buscabusca") {
        $alugados = $daoAluga->busca_por_busca($aluga);
        echo json_encode($alugados);
    }
    if ($op == "remover") {
        $daoAluga->remover($aluga);
        echo "Sucesso";
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
