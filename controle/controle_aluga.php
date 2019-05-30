<?php
require_once '../dao/dao_aluga.php';
require_once '../dao/dao_funcionario.php';
require_once '../dao/dao_livro.php';
require_once '../dao/dao_cliente.php';
require_once '../dao/dao_conta.php';
require_once '../model/aluga.php';
require_once '../model/conta.php';

$op = $_POST["op"];

$aluga = new Aluga();
$aluga->setData_locacao($_POST["data_locacao"]);
$aluga->setData_devolucao($_POST["data_devolucao"]);
$aluga->setData_devolvido(null);
$aluga->setDiaria($_POST["diaria"]);
$aluga->setAtivo(true);

$daoFuncionario = new DaoFuncionario();
$daoCliente     = new DaoCliente();
$daoLivro       = new DaoLivro();
$daoAluga       = new DaoAluga();

try {
    if ($op == "salvar") {

        $cliente = $daoCliente->buscar_por_cpf($_POST["id_cliente"]);
        if ($cliente != null) {
            $aluga->setId_cliente($cliente);
        } else {
            echo "Cliente Invalido";
        }

        $funcionario = $daoFuncionario->buscar_por_login($_POST["id_funcionario"]);
        if ($funcionario != null) {
            $aluga->setId_funcionario($funcionario);
        } else {
            echo "Funcionario Invalido";
            $op = "falha";
        }

        $livro = $daoLivro->busca_por_codigo($_POST["id_livro"]);
        if ($livro != null) {
            $aluga->setId_livro($livro);
        } else {
            echo "Codigo Errado!!!";
            $op = "falha";
        }

        if ($op != "falha") {
            $id = $daoAluga->salvar($aluga);

            $conta = new Conta();
            $conta->setData_efetuada($aluga->getData_locacao());
            $conta->setId_aluga($id);
            $conta->setValor_total($aluga->getDiaria() * 7);
            $conta->setData_paga(null);
            $conta->setData_pagamento(null);
            $conta->setMulta(0);

            $daoConta = new DaoConta();
            $r        = $daoConta->salvar($conta);
            if ($r == true) {
                echo "Sucesso";
            } else {
                echo "Falha ao Gerar Conta";
            }
        }

    } else if ($op == "editar") {

        $daoAluga->editar($aluga);
        echo "Sucesso";

    } else if ($op == "buscabusca") {
        $cliente = new Cliente();
        $cliente->setNome($_POST["nome"]);
        $cliente->setCpf($_POST["cpf"]);
        $cliente->setEmail($_POST["email"]);
        $cliente->setTelefone($_POST["telefone"]);
        $cliente->setLogin($_POST["login"]);

        $alugados = $daoAluga->busca_por_busca_cliente($cliente);
        echo json_encode($alugados);

    } else if ($op == "buscacpf") {
        $cliente  = $daoCliente->buscar_por_cpf($_POST["id_cliente"]);
        $alugados = $daoAluga->buscar_por_id($cliente);
        echo json_encode($alugados);

    } else if ($op == "buscaid") {
        session_start();
        $alugados = $daoAluga->buscar_por_id($_SESSION["id"]);
        echo json_encode($alugados);
    }
    else if ($op == "buscaAtrazados") {
        session_start();
        $alugados = $daoAluga->buscar_por_atrazados($_SESSION["id"]);
        echo json_encode($alugados);
    }
    else if ($op == "remover") {
        $aluga->setId($_POST["id"]);
        $daoAluga->remover($aluga);
        echo "Sucesso";
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
