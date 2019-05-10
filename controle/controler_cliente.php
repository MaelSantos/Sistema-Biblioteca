<?php
   require '../dao/dao_cliente.php';
   require '../model/cliente.php';
   
   $objetoCliente = new Cliente();
   $objetoCliente->setNome($_REQUEST['nome']);
   $objetoCliente->setCpf($_REQUEST['cpf']);
   $objetoCliente->setEmail($_REQUEST['email']);
   $objetoCliente->setEndereco($_REQUEST['endereco']);
   
   $dao = new DaoCliente();
   $dao->cadastrarCliente($objetoCliente); 
 	
	header('Location: ../view/view_cliente.php');
	exit;
?>