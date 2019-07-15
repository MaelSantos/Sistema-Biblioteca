from controle.ControleApp import db
from dao.Dao import Dao
from exception.DaoException import DaoException
from model.Funcionario import Funcionario
from cryptography.fernet import Fernet #biblioteca resposavel pela criptografia

key = Fernet.generate_key()
farnet = Fernet(key)

class DaoFuncionario(Dao):

    def create(self, entidade):
        try:
            entidade.senha = farnet.encrypt(entidade.senha.encode('utf-8'))
            entidade.senha = entidade.senha.decode("utf-8")
            print(entidade.senha)
            return super().create(entidade)
        except Exception as e:
            raise DaoException('Erro ao Cadastrar Funcionario - Contatar o ADM')

    def update(self, entidade):
        try:
            entidade.senha = farnet.encrypt(entidade.senha.encode('utf-8'))
            entidade.senha = entidade.senha.decode("utf-8")
            print(entidade.senha)
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

# f = Funcionario(login='admin', nome='admin', senha='admin', cargo='admin', email='admin')
# d = DaoFuncionario()
# d.create(f)