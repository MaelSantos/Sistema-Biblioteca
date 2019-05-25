<?php
require_once '../dao/dao_conta.php';
require_once '../model/conta.php';

$op = $_POST["op"];

$conta = new Conta();
$conta->setData_efetuada($_POST["data_efetuada"]);
$conta->setData_pagamento($_POST["data_pagamento"]);
$conta->setData_paga($_POST["data_paga"]);
$conta->setMulta($_POST["multa"]);
$conta->setValor_total($_POST["valor_total"]);
$conta->setId_aluga($_POST["id_aluga"]);

$daoConta = new DaoConta();

try {
    if ($op == "salvar") {
        $daoConta->salvar($conta);
        echo "Sucesso";
    }
    if ($op == "editar") {
        $daoConta->editar($conta);
        echo "Sucesso";
    }
    if ($op == "buscabusca") {
        $contas = $daoConta->busca_por_busca($conta);
        echo json_encode($contas);
    }
    if ($op == "remover") {
        $daoConta->remover($conta);
        echo "Sucesso";
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
