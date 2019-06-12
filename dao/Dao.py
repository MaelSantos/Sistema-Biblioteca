from controle.ControleApp import db
from exception.DaoException import DaoException
from abc import ABCMeta

class Dao:

    __metaclass__ = ABCMeta

    def __init__(self):
        self.session = db.session

    def create(self, entidade):
        try:
            self.session.add(entidade)
            self.session.commit()
        except Exception as e:
            self.session.rollback()
            raise DaoException('Erro ao Salvar - Contatar ADM')

    def update(self):
        try:
            self.session.commit()
        except Exception as e:
            self.session.rollback()
            raise DaoException('Erro ao Atualizar - Contatar ADM')

    def remove(self, entidade):
        try:
            self.session.delete(entidade)
            self.session.commit()
        except Exception as e:
            self.session.rollback()
            raise DaoException('Erro ao Remover - Contatar ADM')

    def search_id(self, Entidade, id):
        try:
            entidade = self.session.query(Entidade).filter(Entidade.id==id).first()
            return entidade
        except Exception as e:
            raise DaoException('Erro ao Buscar - Contatar ADM')

    def search_all(self, Entidade):
        try:
            list = self.session.query(Entidade).all()
            return list
        except Exception as e:
            raise DaoException('Erro ao Buscar - Contatar ADM')
