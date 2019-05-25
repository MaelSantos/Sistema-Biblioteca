<?php
require_once '../dao/dao_reserva.php';
require_once '../model/reserva.php';

session_start();

$op = $_POST["op"];

$reserva = new Reserva();
$reserva->setAtivo(true);
// $reserva->setData_reserva(date('Y/d/m')); //data atual
// $reserva->setData_retirada(date('Y/d/m', strtotime("+7 days"))); //data atual + 7 dias = data de retirada
$reserva->setData_reserva(date('d/m/Y')); //data atual
$reserva->setData_retirada(date('d/m/Y', strtotime("+7 days"))); //data atual + 7 dias = data de retirada
$reserva->setId_cliente($_SESSION["id"]);
$reserva->setId_livro($_POST["id_livro"]);

echo $reserva;

$daoReserva = new DaoReserva();

try {
    if ($op == "salvar") {
        $r = $daoReserva->salvar($reserva);

        if ($r == true) {
            echo "Sucesso";
        } else {
            echo "Falha";
        }

    }
    if ($op == "editar") {
        $daoReserva->editar($reserva);
        echo "Sucesso";
    }
    if ($op == "buscabusca") {
        $reservas = $daoReserva->busca_por_busca($reserva);
        // echo json_encode($reservas);
        echo "Sucesso";
    }
    if ($op == "remover") {
        $daoReserva->remover($reserva);
        echo "Sucesso";
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
