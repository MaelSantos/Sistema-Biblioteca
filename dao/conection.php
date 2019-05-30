<?php

class Conexao
{
    private $pdo;
    private $erro;

    public function __construct()
    {
        $this->conectar("Biblioteca", "localhost", "root", "");
    }

    public function conectar($banco, $host, $usuario, $senha)
    {
        try {
            // $pdo = new PDO("mysql:host=localhost;dbname=Biblioteca", "root", "");
            $this->pdo = new PDO("mysql:host=" . $host . ";dbname=" . $banco, $usuario, $senha, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES \'UTF8\''));
            return true;
        } catch (PDOException $e) {
            global $erro;
            $erro = $e->getMessage();
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
