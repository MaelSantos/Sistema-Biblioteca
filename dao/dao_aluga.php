<?php

include_once 'conection.php';
include_once '../model/aluga.php';
include_once '../model/cliente.php';

class DaoAluga
{

    private $conexao;

    public function __construct()
    {
        global $conexao;

        $conexao = new Conexao();
        $conexao->conectar("Biblioteca", "localhost", "root", "");
    }

    public function salvar(Aluga $aluga)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT a.id FROM Aluga a, Cliente c WHERE a.id_cliente = c.id");
            $sql->execute();
    
            if ($sql->rowCount() > 5) {
                echo "Cliente Já Excedeu Suas Locações";
                return false;
            } else {
                
                $sql = $conexao->getPdo()->prepare("INSERT INTO Aluga
                (data_locacao, data_devolucao, data_devolvido, diaria, ativo, id_funcionario, id_cliente, id_livro)
                VALUES (:l, :d, :v, :a, :t, :f, :c, :o)");
                $sql->bindValue(":l", $aluga->getData_locacao());
                $sql->bindValue(":d", $aluga->getData_devolucao());
                $sql->bindValue(":v", $aluga->getData_devolvido());
                $sql->bindValue(":a", $aluga->getDiaria());
                $sql->bindValue(":t", $aluga->getAtivo());
                $sql->bindValue(":f", $aluga->getId_funcionario());
                $sql->bindValue(":c", $aluga->getId_cliente());
                $sql->bindValue(":o", $aluga->getId_livro());
                $sql->execute();

                $sql = $conexao->getPdo()->prepare("SELECT id FROM Aluga ORDER BY id DESC LIMIT 1");
                $sql->execute();

                return $sql->fetch()["id"];

            }
        } catch (\Throwable $th) {
            echo $e->getMessage();
            return null;
        }

    }

    public function editar(Aluga $aluga)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("UPDATE Aluga SET data_locacao = :l, data_devolucao = :d, data_devolvido = :v, diaria = :a, ativo = :t, id_funcionario = :f, id_cliente = :c, id_livro = :o WHERE id = :i");
            $sql->bindValue(":l", $aluga->getData_locacao());
            $sql->bindValue(":d", $aluga->getData_devolucao());
            $sql->bindValue(":v", $aluga->getData_devolvido());
            $sql->bindValue(":a", $aluga->getDiaria());
            $sql->bindValue(":t", $aluga->getAtivo());
            $sql->bindValue(":f", $aluga->getId_funcionario());
            $sql->bindValue(":c", $aluga->getId_cliente());
            $sql->bindValue(":o", $aluga->getId_livro());
            $sql->bindValue(":i", $aluga->getId());
            $sql->execute();
            
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }
    public function buscar(Aluga $aluga)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT id FROM Aluga WHERE id_cliente = :c");
            $sql->bindValue(":c", $aluga->getLogin());
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
    
            $sql = $conexao->getPdo()->prepare("SELECT a.*, c.nome, f.nome, l.titulo FROM Aluga a, Cliente c, Funcionario f, Livro l WHERE a.id_cliente = c.id AND a.id_funcionario = f.id AND a.id_livro = l.id AND c.id = :i AND a.data_devolucao > CURRENT_DATE AND a.ativo = true");
            $sql->bindValue(":i", $id);
            $sql->execute();

            $alugados = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $alugados[$i]= $row;
                $i++;
            }
    
            return $alugados;
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return null;
        }
    }

    public function buscar_por_atrazados($id)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT a.*, c.nome, f.nome, l.titulo FROM Aluga a, Cliente c, Funcionario f, Livro l WHERE a.id_cliente = c.id AND a.id_funcionario = f.id AND a.id_livro = l.id AND c.id = :i AND a.data_devolucao < CURRENT_DATE AND a.ativo = true");
            $sql->bindValue(":i", $id);
            $sql->execute();

            $alugados = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $alugados[$i]= $row;
                $i++;
            }
    
            return $alugados;
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return null;
        }
    }

    public function busca_por_busca_cliente(Cliente $cliente)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT DISTINCT a.*, c.nome, f.nome, l.titulo FROM Cliente c, Aluga a, Funcionario f, Livro l WHERE (c.nome LIKE :n OR c.cpf LIKE :c OR c.telefone LIKE :t OR c.email LIKE :e OR c.login LIKE :l) AND a.id_cliente = c.id AND a.id_funcionario = f.id AND a.id_livro = l.id");
            $sql->bindValue(":n", "%".$cliente->getNome()."%");
            $sql->bindValue(":c", "%".$cliente->getCpf()."%");
            $sql->bindValue(":t", "%".$cliente->getTelefone()."%");
            $sql->bindValue(":e", "%".$cliente->getEmail()."%");
            $sql->bindValue(":l", "%".$cliente->getLogin()."%");
            $sql->execute();
    
            $alugados = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $alugados[$i]= $row;
                $i++;
            }
    
            return $alugados;
            
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

    public function remover(Aluga $aluga)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("UPDATE Aluga SET ativo = false, data_devolvido = CURRENT_DATE WHERE id = :i");
            $sql->bindValue(":i", $aluga->getId());
            $sql->execute();

        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

}
