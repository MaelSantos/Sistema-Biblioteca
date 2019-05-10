<?php

include 'usuario.php';

class Cliente extends Usuario{

    private $cpf;
    private $telefone;

    public function __construct($id, $nome, $login, $senha, $email, $cpf, $telefone){
        parent::__construct($id, $nome, $login, $senha, $email);
        $this->cpf = $cpf;
        $this->telefone = $telefone;
    }


    /**
     * Get the value of cpf
     */ 
    public function getCpf()
    {
        return $this->cpf;
    }

    /**
     * Set the value of cpf
     *
     * @return  self
     */ 
    public function setCpf($cpf)
    {
        $this->cpf = $cpf;

        return $this;
    }

    /**
     * Get the value of telefone
     */ 
    public function getTelefone()
    {
        return $this->telefone;
    }

    /**
     * Set the value of telefone
     *
     * @return  self
     */ 
    public function setTelefone($telefone)
    {
        $this->telefone = $telefone;

        return $this;
    }
}