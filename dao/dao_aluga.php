<?php

include_once 'conection.php';
include_once '../model/aluga.php';

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
                return true;
            }
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }

    }

    public function editar(Aluga $aluga)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("UPDATE Aluga SET data_locacao = :l, data_devolucao = :d, data_devolvido = :v, diaria = :a, ativo = :t, id_funcionario = :f, id_cliente = :c, id_livro = :o");
            $sql->bindValue(":l", $aluga->getData_locacao());
            $sql->bindValue(":d", $aluga->getData_devolucao());
            $sql->bindValue(":v", $aluga->getData_devolvido());
            $sql->bindValue(":a", $aluga->getDiaria());
            $sql->bindValue(":t", $aluga->getAtivo());
            $sql->bindValue(":f", $aluga->getId_funcionario());
            $sql->bindValue(":c", $aluga->getId_cliente());
            $sql->bindValue(":o", $aluga->getId_livro());
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

    public function busca_por_busca(Aluga $aluga)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT * FROM Aluga WHERE data_locacao LIKE :l OR data_devolucao LIKE :d OR data_devolvido LIKE :v OR diaria LIKE :a OR ativo LIKE :t OR id_funcionario LIKE :f OR id_cliente LIKE :c OR id_livro LIKE :o");
            $sql->bindValue(":l", $aluga->getData_locacao());
            $sql->bindValue(":d", $aluga->getData_devolucao());
            $sql->bindValue(":v", $aluga->getData_devolvido());
            $sql->bindValue(":a", $aluga->getDiaria());
            $sql->bindValue(":t", $aluga->getAtivo());
            $sql->bindValue(":f", $aluga->getId_funcionario());
            $sql->bindValue(":c", $aluga->getId_cliente());
            $sql->bindValue(":o", $aluga->getId_livro());
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
    
            $sql = $conexao->getPdo()->prepare("DELETE FROM Aluga WHERE id = :i");
            $sql->bindValue(":i", $aluga->getId());
            $sql->execute();
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

}
