<?php

include_once("php\conection.php");

$login = $_POST[txtLogin];
$email = $_POST[txtEmail];
$senha = $_POST[txtSenha];

class DaoPessoa {

    private $conexao;

    function __construtor()
    {
        $conexao = new Conexao();
        $conexao->conectar("Teste","localhost","root","");
    }

    public function salvar($email, $login, $senha){

        global $conexao;

        $sql = $conexao->getPdo()->prepare("SELECT id FROM Pessoa WHERE email = :e");
        $sql->bindValue(":e", $email);
        $sql->execute();

        if($sql->rowCount() > 0)
            return false;
        else{
            $sql = $conexao->getPdo()->prepare("INSERT INTO Pessoa(email, login, senha) 
            VALUES (:e, :l, :s)");
            $sql->bindValue(":e", $email);
            $sql->bindValue(":l", $login);
            $sql->bindValue(":s", md5($senha));
            $sql->execute();
            return true;
        }
    }

}