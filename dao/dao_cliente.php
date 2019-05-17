<?php

include_once 'conection.php';
include_once '../model/cliente.php';

class DaoCliente
{

    private $conexao;

    public function __construct()
    {
        global $conexao;

        $conexao = new Conexao();
        $conexao->conectar("Biblioteca", "localhost", "root", "");
    }

    public function salvar(Cliente $cliente)
    {

        global $conexao;

        $sql = $conexao->getPdo()->prepare("SELECT id FROM Cliente WHERE email = :e");
        $sql->bindValue(":e", $cliente->getEmail());
        $sql->execute();

        if ($sql->rowCount() > 0) {
            return false;
        } else {
            $sql = $conexao->getPdo()->prepare("INSERT INTO Cliente(nome, cpf, telefone, email, login, senha)
            VALUES (:n, :c, :t, :e, :l, :s)");
            $sql->bindValue(":n", $cliente->getNome());
            $sql->bindValue(":c", $cliente->getCpf());
            $sql->bindValue(":t", $cliente->getTelefone());
            $sql->bindValue(":e", $cliente->getEmail());
            $sql->bindValue(":l", $cliente->getLogin());
            $sql->bindValue(":s", md5($cliente->getSenha()));
            $sql->execute();
            return true;

        }
    }

    public function editar(Cliente $cliente)
    {

        global $conexao;

        $sql = $conexao->getPdo()->prepare("UPDATE Cliente SET nome = :n, cpf = :c, telefone = :t, email = :e, login = :l, senha = :s");
        $sql->bindValue(":n", $cliente->getNome());
        $sql->bindValue(":c", $cliente->getCpf());
        $sql->bindValue(":t", $cliente->getTelefone());
        $sql->bindValue(":e", $cliente->getEmail());
        $sql->bindValue(":l", $cliente->getLogin());
        $sql->bindValue(":s", md5($cliente->getSenha()));
        $sql->execute();
    }
    public function buscar(Cliente $cliente)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT id FROM Cliente WHERE login = :l AND senha = :s");
            $sql->bindValue(":l", $cliente->getLogin());
            $sql->bindValue(":s", md5($cliente->getSenha()));
            $sql->execute();
    
            // $c = $sql->fetch();
    
            if ($sql->rowCount() > 0) {
                return true;
            } else {
                return false;
            }
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return false;
        }
    }
    public function remover(Cliente $cliente)
    {

        global $conexao;

        $sql = $conexao->getPdo()->prepare("DELETE FROM Cliente WHERE id = :i");
        $sql->bindValue(":i", $cliente->getId());
        $sql->execute();
    }

}
