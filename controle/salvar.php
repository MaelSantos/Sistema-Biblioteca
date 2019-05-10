<?php

include_once('conection.php');

$nome = $_GET["nome"];
$cpf = $_GET["cpf"];
$email = $_GET["email"];
$telefone = $_GET["telefone"];
$login = $_GET["login"];
$senha = $_GET["senha"];

$pdo;

$sql = $pdo->prepare("SELECT id FROM Cliente WHERE email = :e");
$sql->bindValue(":e", $email);
$sql->execute();

if($sql->rowCount() > 0){
    echo "Erro ao Salvar";
    return false;
}
else{
    $sql = $pdo->prepare("INSERT INTO Cliente(nome, cpf, email, telefone, login, senha) 
    VALUES (:n, :c, :t, :e, :l, :s)");
    $sql->bindValue(":n", $nome);
    $sql->bindValue(":c", $cpf);
    $sql->bindValue(":t", $telefone);
    $sql->bindValue(":e", $email);
    $sql->bindValue(":l", $login);
    $sql->bindValue(":s", md5($senha));
    $sql->execute();
    echo "Salvo";
    return true;
}