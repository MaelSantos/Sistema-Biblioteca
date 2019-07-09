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
