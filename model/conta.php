<?php

class Conta
{
    private $data_efetuada;
    private $data_pagamento;
    private $data_paga;
    private $multa;
    private $valor_total;
    private $id_aluga;

    public function __construct($data_efetuada, $data_pagamento, $data_paga, $multa, $valor_total, $id_aluga)
    {
        $this->$data_efetuada  = $data_efetuada;
        $this->$data_pagamento = $data_pagamento;
        $this->$data_paga      = $data_paga;
        $this->$multa          = $multa;
        $this->$valor_total    = $valor_total;
        $this->$id_aluga       = $id_aluga;
    }

    /**
     * Get the value of data_efetuada
     */
    public function getData_efetuada()
    {
        return $this->data_efetuada;
    }

    /**
     * Set the value of data_efetuada
     *
     * @return  self
     */
    public function setData_efetuada($data_efetuada)
    {
        $this->data_efetuada = $data_efetuada;

        return $this;
    }

    /**
     * Get the value of data_pagamento
     */
    public function getData_pagamento()
    {
        return $this->data_pagamento;
    }

    /**
     * Set the value of data_pagamento
     *
     * @return  self
     */
    public function setData_pagamento($data_pagamento)
    {
        $this->data_pagamento = $data_pagamento;

        return $this;
    }

    /**
     * Get the value of data_paga
     */
    public function getData_paga()
    {
        return $this->data_paga;
    }

    /**
     * Set the value of data_paga
     *
     * @return  self
     */
    public function setData_paga($data_paga)
    {
        $this->data_paga = $data_paga;

        return $this;
    }

    /**
     * Get the value of multa
     */
    public function getMulta()
    {
        return $this->multa;
    }

    /**
     * Set the value of multa
     *
     * @return  self
     */
    public function setMulta($multa)
    {
        $this->multa = $multa;

        return $this;
    }

    /**
     * Get the value of valor_total
     */
    public function getValor_total()
    {
        return $this->valor_total;
    }

    /**
     * Set the value of valor_total
     *
     * @return  self
     */
    public function setValor_total($valor_total)
    {
        $this->valor_total = $valor_total;

        return $this;
    }

    /**
     * Get the value of id_aluga
     */
    public function getId_aluga()
    {
        return $this->id_aluga;
    }

    /**
     * Set the value of id_aluga
     *
     * @return  self
     */
    public function setId_aluga($id_aluga)
    {
        $this->id_aluga = $id_aluga;

        return $this;
    }
}
