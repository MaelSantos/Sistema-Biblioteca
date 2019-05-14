<?php

include_once 'usuario.php';

class Funcionario extends Usuario
{
    private $cargo;

    public function __construct($id, $nome, $login, $senha, $email, $cargo)
    {
        parent::__construct($id, $nome, $login, $senha, $email);
        $this->cargo = $cargo;
    }

    /**
     * Get the value of cargo
     */
    public function getCargo()
    {
        return $this->cargo;
    }

    /**
     * Set the value of cargo
     *
     * @return  self
     */
    public function setCargo($cargo)
    {
        $this->cargo = $cargo;

        return $this;
    }
}
