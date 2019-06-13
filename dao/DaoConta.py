from dao.Dao import Dao
from exception.DaoException import DaoException
from model.Conta import Conta

class DaoConta(Dao):

    def search_id(self, id):
        try:
            return super().search_id(Conta, id)
        except Exception as e:
            raise DaoException('Erro ao Buscar - Contatar o ADM')

    def search_all(self):
        try:
            return super().search_all(Conta)
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos - Contatar o ADM')

    # public function busca_por_busca(Conta $conta)
    # {
    #     try {
    #         global $conexao;
    #
    #         $sql = $conexao->getPdo()->prepare("SELECT * FROM Conta WHERE data_efetuada LIKE :e OR data_pagamento LIKE :p OR data_paga LIKE :a OR multa LIKE :m OR valor_total LIKE :v OR id_aluga LIKE :l");
    #         $sql->bindValue(":e", $conta->getData_efetuada());
    #         $sql->bindValue(":p", $conta->getData_pagamento());
    #         $sql->bindValue(":a", $conta->getData_paga());
    #         $sql->bindValue(":m", $conta->getMulta());
    #         $sql->bindValue(":v", $conta->getValor_total());
    #         $sql->bindValue(":l", $conta->getId_aluga());
    #         $sql->execute();
    #
    #         $contas = array();
    #         $i = 0;
    #         while($row = $sql->fetch()) {
    #             $contas[$i]= $row;
    #             $i++;
    #         }
    #
    #         return $contas;
    #
    #     } catch (\Throwable $th) {
    #         echo $e->getMessage();
    #     }
    # }
