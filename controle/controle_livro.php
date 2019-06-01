<?php
require_once '../dao/dao_livro.php';
require_once '../model/livro.php';

$op = $_POST["op"];

$livro = new Livro();
$livro->setAutor($_POST["autor"]);
$livro->setTitulo($_POST["titulo"]);
$livro->setAno($_POST["ano"]);
$livro->setEditora($_POST["editora"]);
$livro->setCodigo($_POST["codigo"]);
$livro->setQuantidade($_POST["quantidade"]);
$livro->setDisponivel($_POST["disponivel"]);

$daoLivro = new DaoLivro();

try {
    if ($op == "salvar") {
        $daoLivro->salvar($livro);
        echo "Sucesso";
    }
    if ($op == "editar") {
        $livro->setId($_POST["id"]);
        $daoLivro->editar($livro);
        echo "Sucesso";
    }
    if ($op == "buscabusca") {
        $livros = $daoLivro->busca_por_busca($livro);
        echo json_encode($livros);
    }
    if ($op == "remover") {
        $livro->setId($_POST["id"]);
        $daoLivro->remover($livro);
        echo "Sucesso";
    }
} catch (Throwable $th) {
    echo "Falha" . $th;
}
