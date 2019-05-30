<?php

include_once 'conection.php';
include_once '../model/reserva.php';

class DaoReserva
{

    private $conexao;

    public function __construct()
    {
        global $conexao;

        $conexao = new Conexao();
        $conexao->conectar("Biblioteca", "localhost", "root", "");
    }

    public function salvar(Reserva $reserva)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT r.id FROM Reserva r WHERE r.id_cliente = :i");
            $sql->bindValue(":i", $reserva->getId_cliente());
            $sql->execute();

            if ($sql->rowCount() > 5) {
                echo "Cliente Já Excedeu Suas Reservas";
                return false;
            } else {
    
                $sql = $conexao->getPdo()->prepare("INSERT INTO Reserva(data_reserva, data_retirada, ativo, id_cliente, id_livro)
                VALUES (:d, :r, :a, :c, :l)");
                $sql->bindValue(":d", $reserva->getData_reserva());
                $sql->bindValue(":r", $reserva->getData_retirada());
                $sql->bindValue(":a", $reserva->getAtivo());
                $sql->bindValue(":c", $reserva->getId_cliente());
                $sql->bindValue(":l", $reserva->getId_livro());
                $sql->execute();
                return true;
            }
            
        } catch (\Throwable $th) {
            echo $th->getMessage();
        }
    }

    public function editar(Reserva $reserva)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("UPDATE Reserva SET data_reserva = :d, data_retirada = :r, ativo = :a, id_cliente = :c, id_livro = :l");
            $sql->bindValue(":d", $reserva->getData_reserva());
            $sql->bindValue(":r", $reserva->getData_retirada());
            $sql->bindValue(":a", $reserva->getAtivo());
            $sql->bindValue(":c", $reserva->getId_cliente());
            $sql->bindValue(":l", $reserva->getId_livro());
            $sql->execute();
            
        } catch (\Throwable $th) {
            echo $th->getMessage();
        }
    }
    public function buscar_por_cliente($id)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT * FROM Reserva r WHERE r.id_cliente = :c AND r.ativo = true");
            $sql->bindValue(":c", $id);
            $sql->execute();
    
            $reservas = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $reservas[$i]= $row;
                $i++;
            }
    
            return $reservas;
            
        } catch (\Throwable $th) {
            echo $th->getMessage();
        }
        return null;
    }

    public function buscar_por_id($id)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT r.*, l.titulo, c.nome FROM Reserva r, Cliente c, Livro l WHERE r.id_cliente = c.id AND r.id_livro = l.id AND c.id = :d AND r.ativo = true");
            $sql->bindValue(":d", $id);
            $sql->execute();
    
            $reservas = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $reservas[$i]= $row;
                $i++;
            }
            
            return $reservas;
            
        } catch (\Throwable $th) {
            echo $th->getMessage();
        }
        return null;
    }

    public function busca_por_busca(Reserva $reserva)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT * FROM Reserva WHERE data_reserva LIKE :d OR data_retirada LIKE :r OR ativo LIKE :a OR id_cliente LIKE :c OR id_livro LIKE :l");
            $sql->bindValue(":d", "%".$reserva->getData_reserva()."%");
            $sql->bindValue(":r", "%".$reserva->getData_retirada()."%");
            $sql->bindValue(":a", "%".$reserva->getAtivo()."%");
            $sql->bindValue(":c", "%".$reserva->getId_cliente()."%");
            $sql->bindValue(":l", "%".$reserva->getId_livro()."%");
            $sql->execute();
    
            $reservas = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $reservas[$i]= $row;
                $i++;
            }
    
            return $reservas;
            
        } catch (\Throwable $th) {
            echo $th->getMessage();
        }
        return null;
    }

    public function remover(Reserva $reserva)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("UPDATE Reserva r INNER JOIN Cliente c ON (c.id = r.id_cliente AND c.id = :c) INNER JOIN Livro l ON (l.id = r.id_livro AND l.titulo = :l) SET r.ativo = false");
            $sql->bindValue(":l", $reserva->id_livro());
            $sql->bindValue(":c", $reserva->id_cliente());
            $sql->execute();
            
        } catch (\Throwable $th) {
            echo $th->getMessage();
        }
    }

}
