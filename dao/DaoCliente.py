from dao.Dao import Dao
from model.Cliente import Cliente
from exception.DaoException import DaoException

class DaoCliente(Dao):

    def search_id(self, id):
        try:
            return super().search_id(Cliente, id)
        except Exception as e:
            raise DaoException('Erro ao Buscar - Contatar o ADM')

    def search_all(self):
        try:
            return super().search_all(Cliente)
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos - Contatar o ADM')

    # def search_cpf(self, cpf):
    #     try:
    #         # $sql = $conexao->getPdo()->prepare("SELECT id FROM Cliente WHERE cpf = :c");
    #         # $sql->bindValue(":c", $cpf);
    #         # $sql->execute();
    #         #
    #         # return $sql->fetch()["id"];
    #
    #     except Exception as e:
    #         raise DaoException('Erro ao Buscar Cliente Por CPF- Contatar o ADM')
    #
    # def search_login(self, login):
    #     try:
    #         # $sql = $conexao->getPdo()->prepare("SELECT id FROM Cliente WHERE login = :l");
    #         # $sql->bindValue(":l", $login);
    #         # $sql->execute();
    #         #
    #         # return $sql->fetch()["id"];
    #
    #     except Exception as e:
    #         raise DaoException('Erro ao Buscar Cliente Por Login- Contatar o ADM')
    #
    # def search_id(self, id):
    #     try:
    #         # $sql = $conexao->getPdo()->prepare("SELECT * FROM Cliente WHERE id = :i");
    #         # $sql->bindValue(":i", $id);
    #         # $sql->execute();
    #         #
    #         # $clientes = array();
    #         # $i = 0;
    #         # while($row = $sql->fetch()) {
    #         #     $clientes[$i]= $row;
    #         #     $i++;
    #         # }
    #         #
    #         # return $clientes;
    #
    #     except Exception as e:
    #         raise DaoException('Erro ao Buscar Cliente Por Login- Contatar o ADM')
    #
    # def search_search(self, cliente):
    #     try:
    #         # $sql = $conexao->getPdo()->prepare("SELECT * FROM Cliente WHERE (nome LIKE :n OR cpf LIKE :c OR telefone LIKE :t OR email LIKE :e OR login LIKE :l) AND ativo = true");
    #         # $sql->bindValue(":n", "%".$cliente->getNome()."%");
    #         # $sql->bindValue(":c", "%".$cliente->getCpf()."%");
    #         # $sql->bindValue(":t", "%".$cliente->getTelefone()."%");
    #         # $sql->bindValue(":e", "%".$cliente->getEmail()."%");
    #         # $sql->bindValue(":l", "%".$cliente->getLogin()."%");
    #         # $sql->execute();
    #         #
    #         # $clientes = array();
    #         # $i = 0;
    #         # while($row = $sql->fetch()) {
    #         #     $clientes[$i]= $row;
    #         #     $i++;
    #         # }
    #         #
    #         # return $clientes;
    #
    #     except Exception as e:
    #         raise DaoException('Erro ao Buscar Cliente Por Login- Contatar o ADM')


c = Cliente(nome='teste', login='teste', senha='teste', cpf='teste', telefone='teste', email='teste')
d = DaoCliente()
d.create(c)