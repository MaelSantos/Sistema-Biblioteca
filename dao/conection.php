<?php

class Conexao
{
    private $pdo;
    private $erro;

    // private $nome = "Biblioteca";
    // private $host = "localhost";
    // private $usuario = "root";
    // private $senha = "";

    // function __construct()
    // {
    //     conectar($nome, $host, $usuario, $senha);
    // }

    public function conectar($nome, $host, $usuario, $senha)
    {
        try {
            global $pdo;

            $pdo = new PDO("mysql:dbname=".$nome.";host=".$host, $usuario, $senha);
            return true;
        } catch (PDOException $e) {
            global $erro;
            $erro = $e->getMessagem();
            return false;
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
