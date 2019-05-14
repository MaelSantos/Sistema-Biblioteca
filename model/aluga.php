<?php

class Aluga
{

    private $id;
    private $data_locacao;
    private $data_devolucao;
    private $data_devolvido;
    private $diaria;
    private $ativo;
    private $id_funcionario;
    private $id_cliente;
    private $id_livro;

    public function __construct($id, $data_locacao, $data_devolucao, $data_devolvido, $diaria, $ativo, $id_funcionario, $id_cliente, $id_livro)
    {
        $this->id              = $id;
        $this->$data_locacao   = $data_locacao;
        $this->$data_devolucao = $data_devolucao;
        $this->$data_devolvido = $data_devolvido;
        $this->$diaria         = $diaria;
        $this->$ativo          = $ativo;
        $this->$id_funcionario = $id_funcionario;
        $this->$id_cliente     = $id_cliente;
        $this->$id_livro       = $id_livro;
    }

    /**
     * Get the value of id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of data_locacao
     */
    public function getData_locacao()
    {
        return $this->data_locacao;
    }

    /**
     * Set the value of data_locacao
     *
     * @return  self
     */
    public function setData_locacao($data_locacao)
    {
        $this->data_locacao = $data_locacao;

        return $this;
    }

    /**
     * Get the value of data_devolucao
     */
    public function getData_devolucao()
    {
        return $this->data_devolucao;
    }

    /**
     * Set the value of data_devolucao
     *
     * @return  self
     */
    public function setData_devolucao($data_devolucao)
    {
        $this->data_devolucao = $data_devolucao;

        return $this;
    }

    /**
     * Get the value of data_devolvido
     */
    public function getData_devolvido()
    {
        return $this->data_devolvido;
    }

    /**
     * Set the value of data_devolvido
     *
     * @return  self
     */
    public function setData_devolvido($data_devolvido)
    {
        $this->data_devolvido = $data_devolvido;

        return $this;
    }

    /**
     * Get the value of diaria
     */
    public function getDiaria()
    {
        return $this->diaria;
    }

    /**
     * Set the value of diaria
     *
     * @return  self
     */
    public function setDiaria($diaria)
    {
        $this->diaria = $diaria;

        return $this;
    }

    /**
     * Get the value of ativo
     */
    public function getAtivo()
    {
        return $this->ativo;
    }

    /**
     * Set the value of ativo
     *
     * @return  self
     */
    public function setAtivo($ativo)
    {
        $this->ativo = $ativo;

        return $this;
    }

    /**
     * Get the value of id_funcionario
     */
    public function getId_funcionario()
    {
        return $this->id_funcionario;
    }

    /**
     * Set the value of id_funcionario
     *
     * @return  self
     */
    public function setId_funcionario($id_funcionario)
    {
        $this->id_funcionario = $id_funcionario;

        return $this;
    }

    /**
     * Get the value of id_cliente
     */
    public function getId_cliente()
    {
        return $this->id_cliente;
    }

    /**
     * Set the value of id_cliente
     *
     * @return  self
     */
    public function setId_cliente($id_cliente)
    {
        $this->id_cliente = $id_cliente;

        return $this;
    }

    /**
     * Get the value of id_livro
     */
    public function getId_livro()
    {
        return $this->id_livro;
    }

    /**
     * Set the value of id_livro
     *
     * @return  self
     */
    public function setId_livro($id_livro)
    {
        $this->id_livro = $id_livro;

        return $this;
    }
}
