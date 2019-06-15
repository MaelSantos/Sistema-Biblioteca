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

    def search_cpf(self, cpf):
        try:
            cliente = self.session.query(Cliente).filter(Cliente.cpf==cpf, Cliente.ativo==True).first()
            return cliente;
        except Exception as e:
            raise DaoException('Erro ao Buscar Cliente Por CPF- Contatar o ADM')

    def search_login(self, login):
        try:
            cliente = self.session.query(Cliente).filter(Cliente.login==login, Cliente.ativo==True).first()
            return cliente
        except Exception as e:
            raise DaoException('Erro ao Buscar Cliente Por Login- Contatar o ADM')
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
