<?php

class Livro
{

    private $id;
    private $autor;
    private $titulo;
    private $ano;
    private $editora;
    private $codigo;
    private $quantidade;
    private $disponivel;

    public function __construct($titulo, $autor, $ano, $editora, $codigo, $quantidade, $disponivel)
    {
        $this->$autor      = $autor;
        $this->$titulo     = $titulo;
        $this->$ano        = $ano;
        $this->$editora    = $editora;
        $this->$codigo     = $codigo;
        $this->$quantidade = $quantidade;
        $this->$disponivel = $disponivel;
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
     * Get the value of autor
     */
    public function getAutor()
    {
        return $this->autor;
    }

    /**
     * Set the value of autor
     *
     * @return  self
     */
    public function setAutor($autor)
    {
        $this->autor = $autor;

        return $this;
    }

    /**
     * Get the value of titulo
     */
    public function getTitulo()
    {
        return $this->titulo;
    }

    /**
     * Set the value of titulo
     *
     * @return  self
     */
    public function setTitulo($titulo)
    {
        $this->titulo = $titulo;

        return $this;
    }

    /**
     * Get the value of ano
     */
    public function getAno()
    {
        return $this->ano;
    }

    /**
     * Set the value of ano
     *
     * @return  self
     */
    public function setAno($ano)
    {
        $this->ano = $ano;

        return $this;
    }

    /**
     * Get the value of editora
     */
    public function getEditora()
    {
        return $this->editora;
    }

    /**
     * Set the value of editora
     *
     * @return  self
     */
    public function setEditora($editora)
    {
        $this->editora = $editora;

        return $this;
    }

    /**
     * Get the value of codigo
     */
    public function getCodigo()
    {
        return $this->codigo;
    }

    /**
     * Set the value of codigo
     *
     * @return  self
     */
    public function setCodigo($codigo)
    {
        $this->codigo = $codigo;

        return $this;
    }

    /**
     * Get the value of quantidade
     */
    public function getQuantidade()
    {
        return $this->quantidade;
    }

    /**
     * Set the value of quantidade
     *
     * @return  self
     */
    public function setQuantidade($quantidade)
    {
        $this->quantidade = $quantidade;

        return $this;
    }

    /**
     * Get the value of disponivel
     */
    public function getDisponivel()
    {
        return $this->disponivel;
    }

    /**
     * Set the value of disponivel
     *
     * @return  self
     */
    public function setDisponivel($disponivel)
    {
        $this->disponivel = $disponivel;

        return $this;
    }
}
