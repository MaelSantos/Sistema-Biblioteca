<?php

namespace php\conection;

try {

    $pdo = new PDO("mysql:dbname=".$nome.";host=".$host, $usuario, $senha);
    
} catch (PDOException $e) {
    $erro = $e->getMessagem();
}

class Conexao
{
    private $pdo;
    private $erro;

    function conectar($nome, $host, $usuario, $senha)
    {
        try {
            global $pdo;

            $pdo = new PDO("mysql:dbname=".$nome.";host=".$host, $usuario, $senha);
            
        } catch (PDOException $e) {
            global $erro;
            $erro = $e->getMessagem();
        }
    }

    /**
     * Get the value of pdo
     */ 
    public function getPdo()
    {
        return $this->pdo;
    }

    /**
     * Get the value of erro
     */ 
    public function getErro()
    {
        return $this->erro;
    }
}
