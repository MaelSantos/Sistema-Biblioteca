from dao.Dao import Dao
from model.Aluga import Aluga
from exception.DaoException import DaoException


class DaoAluga(Dao):

    def search_id(self, id):
        try:
            return super().search_id(Aluga, id)
        except Exception as e:
            raise DaoException('Erro ao Buscar - Contatar o ADM')

    def search_all(self):
        try:
            return super().search_all(Aluga)
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos - Contatar o ADM')

    def search_all_cliente(self, id):
        try:
        # $sql = $conexao->getPdo()->prepare("SELECT id FROM Aluga WHERE id_cliente = :c");
        # $sql->bindValue(":c", $aluga->getLogin());
        # $sql->execute();
        # return $sql->fetch()["id"];
        except Exception as e:
            raise DaoException('Erro ao Buscar Locações - Contatar o ADM')

    def search_cliente_id(self, id):
        try:
            # $sql = $conexao->getPdo()->prepare("SELECT a.*, c.nome, f.nome, l.titulo FROM Aluga a, Cliente c, Funcionario f, Livro l WHERE a.id_cliente = c.id AND a.id_funcionario = f.id AND a.id_livro = l.id AND c.id = :i AND a.data_devolucao > CURRENT_DATE AND a.ativo = true");
            # $sql->bindValue(":i", $id);
            # $sql->execute();
            # $alugados = array();
            # $i = 0;
            # while($row = $sql->fetch()) {
            #     $alugados[$i]= $row;
            #     $i++;
            # }
            # return $alugados;
        except Exception as e:
            raise DaoException('Erro ao Buscar Locações - Contatar o ADM')

    def search_atrasados(self, id):
        try:
            # $sql = $conexao->getPdo()->prepare("SELECT a.*, c.nome, f.nome, l.titulo FROM Aluga a, Cliente c, Funcionario f, Livro l WHERE a.id_cliente = c.id AND a.id_funcionario = f.id AND a.id_livro = l.id AND c.id = :i AND a.data_devolucao < CURRENT_DATE AND a.ativo = true");
            # $sql->bindValue(":i", $id);
            # $sql->execute();
            # $alugados = array();
            # $i = 0;
            # while($row = $sql->fetch()) {
            #     $alugados[$i]= $row;
            #     $i++;
            # }
            # return $alugados;
        except Exception as e:
            raise DaoException('Erro ao Buscar Locações - Contatar o ADM')

    def search_search_cliente(self, cliente)
        try:
            # global $conexao;
            #
            # $sql = $conexao->getPdo()->prepare("SELECT DISTINCT a.*, c.nome, f.nome, l.titulo FROM Cliente c, Aluga a, Funcionario f, Livro l WHERE (c.nome LIKE :n OR c.cpf LIKE :c OR c.telefone LIKE :t OR c.email LIKE :e OR c.login LIKE :l) AND a.id_cliente = c.id AND a.id_funcionario = f.id AND a.id_livro = l.id");
            # $sql->bindValue(":n", "%".$cliente->getNome()."%");
            # $sql->bindValue(":c", "%".$cliente->getCpf()."%");
            # $sql->bindValue(":t", "%".$cliente->getTelefone()."%");
            # $sql->bindValue(":e", "%".$cliente->getEmail()."%");
            # $sql->bindValue(":l", "%".$cliente->getLogin()."%");
            # $sql->execute();
            #
            # $alugados = array();
            # $i = 0;
            # while($row = $sql->fetch()) {
            #     $alugados[$i]= $row;
            #     $i++;
            # }
            #
            # return $alugados;
        except Exception as e:
            raise DaoException('Erro ao Buscar Locações - Contatar o ADM')