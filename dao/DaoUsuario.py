from controle.ControleApp import salt
from dao.Dao import Dao
from exception.DaoException import DaoException
from model.Usuario import Usuario
from model.Cliente import Cliente
from model.Funcionario import Funcionario
import bcrypt

class DaoUsuario(Dao):

    def search_id(self, id):
        try:
            return super().search_id(Usuario, id)
        except Exception as e:
            raise DaoException('Erro ao Buscar o Usuário- Contatar o ADM')

    def search_all(self):
        try:
            return super().search_all(Usuario)
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos os Usuários - Contatar o ADM')

    def login(self, login, senha):
        try:
            senha = bcrypt.hashpw(senha.encode('utf-8'), salt)
            senha = senha.decode('utf-8')

            usuario = self.session.query(Cliente).filter(Usuario.login==login, Usuario.senha == senha, Usuario.ativo==True).first()
            if usuario == None:
                usuario = self.session.query(Funcionario).filter(Usuario.login == login, Usuario.senha == senha, Usuario.ativo == True).first()

            return usuario
        except Exception as e:
            raise DaoException('Erro ao Realizar Login - Contatar o ADM')
