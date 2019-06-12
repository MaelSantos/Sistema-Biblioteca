from dao.Dao import Dao
from exception.DaoException import DaoException
from model.Usuario import Usuario

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
            usuario = self.session.query(Usuario).filter(Usuario.login==login, Usuario.senha==senha, Usuario.ativo==True).first()
            return usuario
        except Exception as e:
            raise DaoException('Erro ao Realizar Login - Contatar o ADM')