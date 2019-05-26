<?php

include_once 'conection.php';
include_once '../model/conta.php';

class DaoConta
{

    private $conexao;

    public function __construct()
    {
        global $conexao;

        $conexao = new Conexao();
        $conexao->conectar("Biblioteca", "localhost", "root", "");
    }

    public function salvar(Conta $conta)
    {
        try {
            global $conexao;
            
            $sql = $conexao->getPdo()->prepare("INSERT INTO Conta(data_efetuada, data_pagamento, data_paga, multa, valor_total, id_aluga)
            VALUES (:e, :p, :a, :m, :v, :l)");
            $sql->bindValue(":e", $conta->getData_efetuada());
            $sql->bindValue(":p", $conta->getData_pagamento());
            $sql->bindValue(":a", $conta->getData_paga());
            $sql->bindValue(":m", $conta->getMulta());
            $sql->bindValue(":v", $conta->getValor_total());
            $sql->bindValue(":l", $conta->getId_aluga());
            $sql->execute();
            return true;

        } catch (\Throwable $th) {
            echo $e->getMessage();
            return false;
        }

    }

    public function editar(Conta $conta)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("UPDATE Conta SET data_efetuada = :e, data_pagamento = :p, data_paga = :a, multa = :m, valor_total = :v, id_aluga = :l");
            $sql->bindValue(":e", $conta->getData_efetuada());
            $sql->bindValue(":p", $conta->getData_pagamento());
            $sql->bindValue(":a", $conta->getData_paga());
            $sql->bindValue(":m", $conta->getMulta());
            $sql->bindValue(":v", $conta->getValor_total());
            $sql->bindValue(":l", $conta->getId_aluga());
            $sql->execute();
            
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }
    public function buscar(Conta $conta)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT id FROM Conta WHERE id_aluga = :i");
            $sql->bindValue(":i", $conta->getId_aluga());
            $sql->execute();

            return $sql->fetch()["id"];
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function busca_por_busca(Conta $conta)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT * FROM Conta WHERE data_efetuada LIKE :e OR data_pagamento LIKE :p OR data_paga LIKE :a OR multa LIKE :m OR valor_total LIKE :v OR id_aluga LIKE :l");
            $sql->bindValue(":e", $conta->getData_efetuada());
            $sql->bindValue(":p", $conta->getData_pagamento());
            $sql->bindValue(":a", $conta->getData_paga());
            $sql->bindValue(":m", $conta->getMulta());
            $sql->bindValue(":v", $conta->getValor_total());
            $sql->bindValue(":l", $conta->getId_aluga());
            $sql->execute();
    
            $contas = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $contas[$i]= $row;
                $i++;
            }
    
            return $contas;
            
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

    public function remover(Conta $conta)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("DELETE FROM Conta WHERE id = :i");
            $sql->bindValue(":i", $conta->getId());
            $sql->execute();
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

}
