<?php
require_once '../dao/dao_livro.php';
require_once '../model/livro.php';

$op = $_GET["op"];

$livro = new Livro();
$livro->setAutor($_GET["autor"]);
$livro->setTitulo($_GET["titulo"]);
$livro->setAno($_GET["ano"]);
$livro->setEditora($_GET["editora"]);
$livro->setCodigo($_GET["codigo"]);
$livro->setQuantidade($_GET["quantidade"]);
$livro->setDisponivel($_GET["disponivel"]);

$daoLivro = new DaoLivro();

try {
    if ($op == "salvar") {
        $daoLivro->salvar($livro);
        echo "Sucesso";
    }
    if ($op == "editar") {
        $daoLivro->editar($livro);
        echo "Sucesso";
    }
    if ($op == "buscar") {
        $daoLivro->buscar($livro);
        echo "Sucesso";
    }
    if ($op == "remover") {
        $daoLivro->remover($livro);
        echo "Sucesso";
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
