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
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT id FROM Cliente WHERE email = :e");
            $sql->bindValue(":e", $cliente->getEmail());
            $sql->execute();
    
            if ($sql->rowCount() > 0) {
                return false;
            } else {
                $sql = $conexao->getPdo()->prepare("INSERT INTO Cliente(nome, cpf, telefone, email, login, senha, ativo)
                VALUES (:n, :c, :t, :e, :l, :s, :a)");
                $sql->bindValue(":n", $cliente->getNome());
                $sql->bindValue(":c", $cliente->getCpf());
                $sql->bindValue(":t", $cliente->getTelefone());
                $sql->bindValue(":e", $cliente->getEmail());
                $sql->bindValue(":l", $cliente->getLogin());
                $sql->bindValue(":s", md5($cliente->getSenha()));
                $sql->bindValue(":a", $cliente->getAtivo());
                $sql->execute();
                return true;
    
            }
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }

    }

    public function editar(Cliente $cliente)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("UPDATE Cliente SET nome = :n, cpf = :c, telefone = :t, email = :e, login = :l WHERE id = :i");
            $sql->bindValue(":n", $cliente->getNome());
            $sql->bindValue(":c", $cliente->getCpf());
            $sql->bindValue(":t", $cliente->getTelefone());
            $sql->bindValue(":e", $cliente->getEmail());
            $sql->bindValue(":l", $cliente->getLogin());
            $sql->bindValue(":i", $cliente->getId());
            $sql->execute();
            
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }
    public function buscar(Cliente $cliente)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT id FROM Cliente WHERE login = :l AND senha = :s AND ativo = true");
            $sql->bindValue(":l", $cliente->getLogin());
            $sql->bindValue(":s", md5($cliente->getSenha()));
            $sql->execute();

            return $sql->fetch()["id"];
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function buscar_por_cpf($cpf)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT id FROM Cliente WHERE cpf = :c");
            $sql->bindValue(":c", $cpf);
            $sql->execute();

            return $sql->fetch()["id"];
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function buscar_por_login($login)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT id FROM Cliente WHERE login = :l");
            $sql->bindValue(":l", $login);
            $sql->execute();

            return $sql->fetch()["id"];
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function buscar_por_id($id)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT * FROM Cliente WHERE id = :i");
            $sql->bindValue(":i", $id);
            $sql->execute();

            $clientes = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $clientes[$i]= $row;
                $i++;
            }
            
            return $clientes;
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function busca_por_busca(Cliente $cliente)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT * FROM Cliente WHERE (nome LIKE :n OR cpf LIKE :c OR telefone LIKE :t OR email LIKE :e OR login LIKE :l) AND ativo = true");
            $sql->bindValue(":n", "%".$cliente->getNome()."%");
            $sql->bindValue(":c", "%".$cliente->getCpf()."%");
            $sql->bindValue(":t", "%".$cliente->getTelefone()."%");
            $sql->bindValue(":e", "%".$cliente->getEmail()."%");
            $sql->bindValue(":l", "%".$cliente->getLogin()."%");
            $sql->execute();
    
            $clientes = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $clientes[$i]= $row;
                $i++;
            }
    
            return $clientes;
            
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

    public function remover($id)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("UPDATE Cliente SET ativo = false WHERE id = :i");
            $sql->bindValue(":i", $id);
            $sql->execute();
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

}
