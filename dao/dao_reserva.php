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
    
            $sql = $conexao->getPdo()->prepare("SELECT r.id FROM Reserva r, Cliente c WHERE r.id_cliente = c.id");
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
                echo "Salvo";
                echo "Retorno: ".$sql->fetch();
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
    
            $sql = $conexao->getPdo()->prepare("SELECT * FROM Reserva WHERE id_cliente = :c");
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
    
            $sql = $conexao->getPdo()->prepare("DELETE FROM Reserva WHERE id = :i");
            $sql->bindValue(":i", $reserva->getId());
            $sql->execute();
            
        } catch (\Throwable $th) {
            echo $th->getMessage();
        }
    }

}
