from controle.ControleApp import db
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

    def search_search(self, busca):
        try:
            clientes = self.session.query(Funcionario).filter(db.or_(Funcionario.login.ilike('%' + busca + '%'),
                                                                 Funcionario.email.ilike('%' + busca + '%'),
                                                                 Funcionario.cargo.ilike('%' + busca + '%'),
                                                                 Funcionario.nome.ilike('%' + busca + '%'),
                                                                 ), Funcionario.ativo == True).all()
            return clientes;

        except Exception as e:
            raise DaoException('Erro ao Buscar Clientes- Contatar o ADM')
