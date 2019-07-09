from dao.Dao import Dao
from exception.DaoException import DaoException
from model.Reserva import Reserva
from model.Cliente import Cliente
from model.Livro import Livro

class DaoReserva(Dao):

    def search_id(self, id):
        try:
            return super().search_id(Reserva, id)
        except Exception as e:
            raise DaoException('Erro ao Buscar - Contatar o ADM')

    def search_all(self):
        try:
            return super().search_all(Reserva)
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos - Contatar o ADM')

    def search_id_cliente(self, id):
        try:
            reservas = self.session.query(Reserva, Cliente, Livro ).filter(Reserva.id_cliente == Cliente.id,
                                                                           Reserva.id_livro == Livro.id,
                                                                           Cliente.id == id,
                                                                           Reserva.ativo == True).all()
            return reservas
        except Exception as e:
            raise DaoException('Erro ao Buscar Reservas Por Cliente - Contatar o ADM')
