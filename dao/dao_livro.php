<?php

include_once 'conection.php';
include_once '../model/livro.php';

class DaoLivro
{

    private $conexao;

    public function __construct()
    {
        global $conexao;

        $conexao = new Conexao();
        $conexao->conectar("Biblioteca", "localhost", "root", "");
    }

    public function salvar(Livro $livro)
    {

        global $conexao;

        $sql = $conexao->getPdo()->prepare("SELECT id FROM Livro WHERE codigo = :c");
        $sql->bindValue(":c", $livro->getCodigo());
        $sql->execute();

        if ($sql->rowCount() > 0) {
            echo "Erro ao Salvar";
            return false;
        } else {
            $sql = $conexao->getPdo()->prepare("INSERT INTO Livro(autor, titulo, ano, editora, codigo, quantidade, disponivel)
            VALUES (:a, :t, :an, :e, :c, :q, :d)");
            $sql->bindValue(":a", $livro->getAutor());
            $sql->bindValue(":t", $livro->getTitulo());
            $sql->bindValue(":an", $livro->getAno());
            $sql->bindValue(":e", $livro->getEditora());
            $sql->bindValue(":c", $livro->getCodigo());
            $sql->bindValue(":q", $livro->getQuantidade());
            $sql->bindValue(":d", $livro->getDisponivel());
            $sql->execute();
            return true;

        }
    }

    public function editar(Livro $livro)
    {

        global $conexao;

        $sql = $conexao->getPdo()->prepare("UPDATE Livro SET autor = :a, titulo = :t, ano = :an, editora = :e, codigo = :c, quantidade = :q, disponivel = :d");
        $sql->bindValue(":a", $livro->getAutor());
        $sql->bindValue(":t", $livro->getTitulo());
        $sql->bindValue(":an", $livro->getAno());
        $sql->bindValue(":e", $livro->getEditora());
        $sql->bindValue(":c", $livro->getCodigo());
        $sql->bindValue(":q", $livro->getQuantidade());
        $sql->bindValue(":d", $livro->getDisponivel());
        $sql->execute();
    }
    public function buscar(Livro $livro)
    {

        global $conexao;
    }
    public function remover(Livro $livro)
    {

        global $conexao;

        $sql = $conexao->getPdo()->prepare("DELETE FROM Livro WHERE id = :i");
        $sql->bindValue(":i", $livro->getId());
        $sql->execute();
    }

}
