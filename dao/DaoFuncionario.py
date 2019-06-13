from dao.Dao import Dao
from exception.DaoException import DaoException
from model.Funcionario import Funcionario

class DaoFuncionario(Dao):

    def search_id(self, id):
        try:
            return super().search_id(Funcionario, id)
        except Exception as e:
            raise DaoException('Erro ao Buscar - Contatar o ADM')

    def search_all(self):
        try:
            return super().search_all(Funcionario)
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos - Contatar o ADM')
    #
    # public function busca_por_busca(Funcionario $funcionario)
    # {
    #     try {
    #         global $conexao;
    #
    #         $sql = $conexao->getPdo()->prepare("SELECT * FROM Funcionario WHERE (nome LIKE :n OR cargo LIKE :c OR email LIKE :e OR login LIKE :l) AND ativo = true");
    #         $sql->bindValue(":n", "%".$funcionario->getNome()."%");
    #         $sql->bindValue(":c", "%".$funcionario->getCargo()."%");
    #         $sql->bindValue(":e", "%".$funcionario->getEmail()."%");
    #         $sql->bindValue(":l", "%".$funcionario->getLogin()."%");
    #         $sql->execute();
    #
    #         $funcionarios = array();
    #         $i = 0;
    #         while($row = $sql->fetch()) {
    #             $funcionarios[$i]= $row;
    #             $i++;
    #         }
    #
    #         return $funcionarios;
    #
    #     } catch (\Throwable $th) {
    #         echo $e->getMessage();
    #     }
    # }

# f = Funcionario(cargo='admin', nome='admin', login='admin', senha='admin', email='admin')
# d = DaoFuncionario()
# d.create(f)