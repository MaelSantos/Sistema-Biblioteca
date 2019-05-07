<?php

include_once('conection.php');

$email = $_POST["email"];
$login = $_POST["login"];
$senha = $_POST["senha"];

$pdo;

$sql = $pdo->prepare("SELECT id FROM Pessoa WHERE email = :e");
$sql->bindValue(":e", $email);
$sql->execute();

if($sql->rowCount() > 0)
    return false;
else{
    $sql = $pdo->prepare("INSERT INTO Pessoa(email, login, senha) 
    VALUES (:e, :l, :s)");
    $sql->bindValue(":e", $email);
    $sql->bindValue(":l", $login);
    $sql->bindValue(":s", md5($senha));
    $sql->execute();
    return true;
}