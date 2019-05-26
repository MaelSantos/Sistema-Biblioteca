<?php
require_once '../dao/dao_reserva.php';
require_once '../model/reserva.php';
require_once '../dao/dao_livro.php';
require_once '../model/livro.php';
require_once '../dao/dao_cliente.php';
require_once '../model/cliente.php';

session_start();

$op = $_POST["op"];

$reserva = new Reserva();
$reserva->setAtivo(true);
$reserva->setData_reserva($_POST["data_reserva"]);
$reserva->setData_retirada($_POST["data_retirada"]);

echo $reserva;

$daoCliente = new DaoCliente();
$daoLivro   = new DaoLivro();
$daoReserva = new DaoReserva();

try {
    if ($op == "salvar") {

        $cliente = $daoCliente->buscar_por_login($_POST["id_cliente"]);
        if ($cliente != null) {
            $reserva->setId_cliente($cliente);
        } else {
            echo "Cliente Errado!";
            $op = "falha";
        }

        $livro = $daoLivro->busca_por_codigo($_POST["id_livro"]);
        if ($livro != null) {
            $reserva->setId_livro($livro);
        } else {
            echo "Livro Invalido!";
            $op = "falha";
        }

        if ($op != "falha") {

            $r = $daoReserva->salvar($reserva);

            if ($r == true) {
                echo "Sucesso";
            } else {
                echo "Falha";
            }
        }

    }
    else if ($op == "editar") {
        $daoReserva->editar($reserva);
        echo "Sucesso";
    }
    else if ($op == "buscabusca") {
        $reservas = $daoReserva->busca_por_busca($reserva);
        echo json_encode($reservas);
        echo "Sucesso";
    }
    else if ($op == "remover") {
        $daoReserva->remover($reserva);
        echo "Sucesso";
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
