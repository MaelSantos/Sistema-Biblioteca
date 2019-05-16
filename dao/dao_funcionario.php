<?php

include_once 'conection.php';
include_once '../model/funcionario.php';

class DaoFuncionario
{

    private $conexao;

    public function __construct()
    {
        global $conexao;

        $conexao = new Conexao();
        $conexao->conectar("Biblioteca", "localhost", "root", "");
    }

    public function salvar(Funcionario $funcionario)
    {

        global $conexao;

        $sql = $conexao->getPdo()->prepare("SELECT id FROM Funcionario WHERE email = :e");
        $sql->bindValue(":e", $funcionario->getEmail());
        $sql->execute();

        if ($sql->rowCount() > 0) {
            echo "Erro ao Salvar";
            return false;
        } else {
            $sql = $conexao->getPdo()->prepare("INSERT INTO Funcionario(nome, cargo, email, login, senha)
            VALUES (:n, :c, :e, :l, :s)");
            $sql->bindValue(":n", $funcionario->getNome());
            $sql->bindValue(":c", $funcionario->getCargo());
            $sql->bindValue(":e", $funcionario->getEmail());
            $sql->bindValue(":l", $funcionario->getLogin());
            $sql->bindValue(":s", md5($funcionario->getSenha()));
            $sql->execute();
            return true;

        }
    }

    public function editar(Funcionario $funcionario)
    {

        global $conexao;

        $sql = $conexao->getPdo()->prepare("UPDATE Funcionario SET nome = :n, cargo = :c, email = :e, login = :l, senha = :s");
        $sql->bindValue(":n", $funcionario->getNome());
        $sql->bindValue(":c", $funcionario->getCargo());
        $sql->bindValue(":e", $funcionario->getEmail());
        $sql->bindValue(":l", $funcionario->getLogin());
        $sql->bindValue(":s", md5($funcionario->getSenha()));
        $sql->execute();
    }
    public function buscar(Funcionario $funcionario)
    {

        global $conexao;
    }
    public function remover(Funcionario $funcionario)
    {

        global $conexao;

        $sql = $conexao->getPdo()->prepare("DELETE FROM Funcionario WHERE id = :i");
        $sql->bindValue(":i", $funcionario->getId());
        $sql->execute();
    }

}
