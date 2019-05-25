<?php

class Reserva
{

    private $id;
    private $data_reserva;
    private $data_retirada;
    private $ativo;
    private $id_cliente;
    private $id_livro;

    public function __toString()
    {
        return $this->data_reserva." ".$this->data_retirada." ".$this->ativo." ".$this->id_cliente." ".$this->id_livro;
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
     * Get the value of data_reserva
     */
    public function getData_reserva()
    {
        return $this->data_reserva;
    }

    /**
     * Set the value of data_reserva
     *
     * @return  self
     */
    public function setData_reserva($data_reserva)
    {
        $this->data_reserva = $data_reserva;

        return $this;
    }

    /**
     * Get the value of data_retirada
     */
    public function getData_retirada()
    {
        return $this->data_retirada;
    }

    /**
     * Set the value of data_retirada
     *
     * @return  self
     */
    public function setData_retirada($data_retirada)
    {
        $this->data_retirada = $data_retirada;

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
