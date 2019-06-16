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

    # def search_id_cliente(self, id):
    #     try:
    #         reservas = self.session.query(Reserva).filter(Reserva.id_cliente == 0, Reserva.ativo == True).all()
    #         return reservas
    #     except Exception as e:
    #         raise DaoException('Erro ao Buscar Reservas Por Cliente - Contatar o ADM')

    def search_id_cliente(self, id):
        try:
            reservas = self.session.query(Reserva, Cliente, Livro ).filter(Reserva.id_cliente == Cliente.id,
                                                                           Reserva.id_livro == Livro.id,
                                                                           Cliente.id == id,
                                                                           Reserva.ativo == True).all()
            return reservas
        except Exception as e:
            raise DaoException('Erro ao Buscar Reservas Por Cliente - Contatar o ADM')

    # public function busca_por_busca(Reserva $reserva)
    # {
    #     try {
    #         global $conexao;
    #
    #         $sql = $conexao->getPdo()->prepare("SELECT * FROM Reserva WHERE data_reserva LIKE :d OR data_retirada LIKE :r OR ativo LIKE :a OR id_cliente LIKE :c OR id_livro LIKE :l");
    #         $sql->bindValue(":d", "%".$reserva->getData_reserva()."%");
    #         $sql->bindValue(":r", "%".$reserva->getData_retirada()."%");
    #         $sql->bindValue(":a", "%".$reserva->getAtivo()."%");
    #         $sql->bindValue(":c", "%".$reserva->getId_cliente()."%");
    #         $sql->bindValue(":l", "%".$reserva->getId_livro()."%");
    #         $sql->execute();
    #
    #         $reservas = array();
    #         $i = 0;
    #         while($row = $sql->fetch()) {
    #             $reservas[$i]= $row;
    #             $i++;
    #         }
    #
    #         return $reservas;
    #
    #     } catch (\Throwable $th) {
    #         echo $th->getMessage();
    #     }
    #     return null;
    # }