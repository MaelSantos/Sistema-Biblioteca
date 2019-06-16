from builtins import classmethod

from controle.ControleApp import db
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

    def search_search(self, busca):
        try:
            clientes = self.session.query(Cliente).filter(db.or_(Cliente.login.ilike('%'+busca+'%'),
                                                                 Cliente.email.ilike('%'+busca+'%'),
                                                                 Cliente.cpf.ilike('%'+busca+'%'),
                                                                 Cliente.telefone.ilike('%'+busca+'%'),
                                                                 Cliente.nome.ilike('%'+busca+'%'),
                                                                 ), Cliente.ativo == True).all()
            return clientes;

        except Exception as e:
            raise DaoException('Erro ao Buscar Clientes- Contatar o ADM')
