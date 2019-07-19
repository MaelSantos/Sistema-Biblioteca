from controle.ControleApp import db
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

    def search_search(self, busca):
        print(busca)
        try:
            contas = self.session.query(Conta).filter(db.or_(Conta.data_efetuada.ilike('%'+busca+'%'),
                                                     Conta.data_paga.ilike('%'+busca+'%'),
                                                    Conta.data_pagamento.ilike('%'+busca+'%'),
                                                    Conta.id_aluga.ilike('%'+busca+'%'),
                                                     Conta.multa.ilike('%' + busca + '%'),
                                                     Conta.valor_total.ilike('%' + busca + '%')),).all()
            print(contas)
            return contas;
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos - Contatar o ADM')