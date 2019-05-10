<?php

require_once 'conection.php';
include '../model/cliente.php';

class DaoCliente {

    private $conexao;

    function __construtor()
    {
        $conexao = new Conexao();
        $conexao->conectar("Teste","localhost","root","");
    }

    public function salvar(Cliente $cliente){

        global $conexao;

        $sql = $conexao->prepare("SELECT id FROM Cliente WHERE email = :e");
        $sql->bindValue(":e", $cliente.getEmail());
        $sql->execute();

        if($sql->rowCount() > 0){
            echo "Erro ao Salvar";
            return false;
        }
        else{
            $sql = $conexao->prepare("INSERT INTO Cliente(nome, cpf, email, telefone, login, senha) 
            VALUES (:n, :c, :t, :e, :l, :s)");
            $sql->bindValue(":n", $cliente.getNome());
            $sql->bindValue(":c", $cliente.getCpf());
            $sql->bindValue(":t", $cliente.getTelefone());
            $sql->bindValue(":e", $cliente.getEmail());
            $sql->bindValue(":l", $cliente.getLogin());
            $sql->bindValue(":s", md5($cliente.getSenha()));
            $sql->execute();
            echo "Salvo";
            return true;

        }
    }

}