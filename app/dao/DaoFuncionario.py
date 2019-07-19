from controle.ControleApp import db, salt
from dao.Dao import Dao
from exception.DaoException import DaoException
from model.Funcionario import Funcionario
import bcrypt

class DaoFuncionario(Dao):

    def create(self, entidade):
        try:
            entidade.senha = bcrypt.hashpw(entidade.senha.encode('utf-8'), salt)
            entidade.senha = entidade.senha.decode('utf-8')

            return super().create(entidade)
        except Exception as e:
            raise DaoException('Erro ao Cadastrar Funcionario - Contatar o ADM')

    def update(self, entidade):
        try:
            if entidade.senha[0] != '$':
                entidade.senha = bcrypt.hashpw(entidade.senha.encode('utf-8'), salt)
                entidade.senha = entidade.senha.decode('utf-8')

            return super().update();
        except Exception as e:
            raise DaoException('Erro ao Atualizar Funcionario - Contatar o ADM')

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

d = DaoFuncionario()
if d.search_id(1) == None:
    f = Funcionario(login='admin', nome='admin', senha='admin', cargo='admin', email='admin')
    d.create(f)