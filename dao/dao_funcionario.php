<?php

include_once 'conection.php';
include_once '../model/funcionario.php';

class DaoFuncionario
{

    private $conexao;

    public function __construct()
    {
        global $conexao;

        $conexao = new Conexao();
        $conexao->conectar("Biblioteca", "localhost", "root", "");
    }

    public function salvar(Funcionario $funcionario)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT id FROM Funcionario WHERE email = :e");
            $sql->bindValue(":e", $funcionario->getEmail());
            $sql->execute();
    
            if ($sql->rowCount() > 0) {
                echo "Erro ao Salvar";
                return false;
            } else {
                $sql = $conexao->getPdo()->prepare("INSERT INTO Funcionario(nome, cargo, email, login, senha)
                VALUES (:n, :c, :e, :l, :s)");
                $sql->bindValue(":n", $funcionario->getNome());
                $sql->bindValue(":c", $funcionario->getCargo());
                $sql->bindValue(":e", $funcionario->getEmail());
                $sql->bindValue(":l", $funcionario->getLogin());
                $sql->bindValue(":s", md5($funcionario->getSenha()));
                $sql->execute();
                return true;
            }

        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

    public function editar(Funcionario $funcionario)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("UPDATE Funcionario SET nome = :n, cargo = :c, email = :e, login = :l WHERE id = :i");
            $sql->bindValue(":n", $funcionario->getNome());
            $sql->bindValue(":c", $funcionario->getCargo());
            $sql->bindValue(":e", $funcionario->getEmail());
            $sql->bindValue(":l", $funcionario->getLogin());
            $sql->bindValue(":i", $funcionario->getId());
            $sql->execute();
            
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }
    public function editar_senha(Funcionario $funcionario)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("UPDATE Funcionario SET senha = :s WHERE id = :i");
            $sql->bindValue(":s", md5($funcionario->getSenha()));
            $sql->bindValue(":i", $funcionario->getId());
            $sql->execute();
            
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }
    public function buscar(Funcionario $funcionario)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT id FROM Funcionario WHERE login = :l AND senha = :s");
            $sql->bindValue(":l", $funcionario->getLogin());
            $sql->bindValue(":s", md5($funcionario->getSenha()));
            $sql->execute();

            return $sql->fetch()["id"];
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function buscar_por_login($login)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT id FROM Funcionario WHERE login = :l");
            $sql->bindValue(":l", $login);
            $sql->execute();

            return $sql->fetch()["id"];
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return false;
        }
    }

    public function buscar_por_id($id)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT * FROM Funcionario WHERE id = :i");
            $sql->bindValue(":i", $id);
            $sql->execute();

            $funcionarios = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $funcionarios[$i]= $row;
                $i++;
            }

            return $funcionarios;
            
        } catch (\Throwable $e) {
            echo $e->getMessage();
            return false;
        }
    }
    
    public function busca_por_busca(Funcionario $funcionario)
    {
        try {
            global $conexao;
    
            $sql = $conexao->getPdo()->prepare("SELECT * FROM Funcionario WHERE (nome LIKE :n OR cargo LIKE :c OR email LIKE :e OR login LIKE :l) AND ativo = true");
            $sql->bindValue(":n", "%".$funcionario->getNome()."%");
            $sql->bindValue(":c", "%".$funcionario->getCargo()."%");
            $sql->bindValue(":e", "%".$funcionario->getEmail()."%");
            $sql->bindValue(":l", "%".$funcionario->getLogin()."%");
            $sql->execute();
    
            $funcionarios = array();
            $i = 0;
            while($row = $sql->fetch()) {
                $funcionarios[$i]= $row;
                $i++;
            }

            return $funcionarios;
            
        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

    public function remover(Funcionario $funcionario)
    {
        try {
            global $conexao;

            $sql = $conexao->getPdo()->prepare("UPDATE Funcionario SET ativo = false WHERE login = :l");
            $sql->bindValue(":l", $funcionario->getLogin());
            $sql->execute();

        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

    public function remover_por_id($id)
    {
        try {
            global $conexao;

            $sql = $conexao->getPdo()->prepare("UPDATE Funcionario SET ativo = false WHERE id = :i");
            $sql->bindValue(":i", $id);
            $sql->execute();

        } catch (\Throwable $th) {
            echo $e->getMessage();
        }
    }

}
