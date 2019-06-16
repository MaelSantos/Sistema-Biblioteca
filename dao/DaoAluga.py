from controle.ControleApp import db
from dao.Dao import Dao
from model.Aluga import Aluga
from exception.DaoException import DaoException
from model.Cliente import Cliente
from model.Funcionario import Funcionario
from model.Livro import Livro
from datetime import date

from model.Usuario import Usuario


class DaoAluga(Dao):

    def search_id(self, id):
        try:
            return super().search_id(Aluga, id)
        except Exception as e:
            raise DaoException('Erro ao Buscar - Contatar o ADM')

    def search_all(self):
        try:
            return super().search_all(Aluga)
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos - Contatar o ADM')

    # def search_all_cliente(self, id):
    #     try:
    #     # $sql = $conexao->getPdo()->prepare("SELECT id FROM Aluga WHERE id_cliente = :c");
    #     # $sql->bindValue(":c", $aluga->getLogin());
    #     # $sql->execute();
    #     # return $sql->fetch()["id"];
    #     except Exception as e:
    #         raise DaoException('Erro ao Buscar Locações - Contatar o ADM')
    #
    def search_id_cliente(self, id):
        try:
            alugados = self.session.query(Aluga, Cliente, Livro).filter(Aluga.id_cliente == Cliente.id,
                                                                        Aluga.id_livro == Livro.id,
                                                                        Cliente.id == id,
                                                                        Aluga.id_funcionario == Funcionario.id,
                                                                        Aluga.data_devolucao >  date.today(),
                                                                        Aluga.ativo == True).all()
            if len(alugados) > 0:
                temp = self.session.query(Funcionario).filter(Aluga.id_cliente == Cliente.id,
                                                                   Aluga.id_livro == Livro.id,
                                                                   Aluga.id_funcionario == Funcionario.id,
                                                                   Cliente.id == id,
                                                                   Aluga.data_devolucao > date.today(),
                                                                   Aluga.ativo == True).all()
                mds = [
                    alugados[0][0],
                    alugados[0][1],
                    alugados[0][2],
                    temp[0]
                ]
                return mds
            else:
                return alugados

        except Exception as e:
            raise DaoException('Erro ao Buscar Locações - Contatar o ADM')


    def search_id_cliente_atrasados(self, id):
        try:
            alugados = self.session.query(Aluga, Cliente, Livro).filter(Aluga.id_cliente == Cliente.id,
                                                                        Aluga.id_livro == Livro.id,
                                                                        Cliente.id == id,
                                                                        Aluga.id_funcionario == Funcionario.id,
                                                                        Aluga.data_devolucao < date.today(),
                                                                        Aluga.ativo == True).all()
            if len(alugados) > 0:
                temp = self.session.query(Funcionario).filter(Aluga.id_cliente == Cliente.id,
                                                              Aluga.id_livro == Livro.id,
                                                              Aluga.id_funcionario == Funcionario.id,
                                                              Cliente.id == id,
                                                              Aluga.data_devolucao < date.today(),
                                                              Aluga.ativo == True).all()
                mds = [
                    alugados[0][0],
                    alugados[0][1],
                    alugados[0][2],
                    temp[0]
                ]
                return mds
            else:
                return alugados

        except Exception as e:
            raise DaoException('Erro ao Buscar Locações Atrasadas - Contatar o ADM')

    def search_search(self, busca):
        try:
            alugados = self.session.query(Aluga, Cliente, Livro).filter(db.or_(Cliente.nome.ilike('%'+busca+'%'),
                                                                               Cliente.cpf.ilike('%'+busca+'%'),
                                                                               Cliente.email.ilike('%'+busca+'%'),
                                                                               Livro.titulo.ilike('%'+busca+'%'),
                                                                               Livro.titulo.ilike('%'+busca+'%'),
                                                                               Livro.autor.ilike('%'+busca+'%'),
                                                                               Livro.codigo.ilike('%'+busca+'%'),
                                                                               Livro.editora.ilike('%'+busca+'%'),
                                                                               Aluga.data_locacao.ilike('%'+busca+'%'),
                                                                               Aluga.data_devolucao.ilike('%'+busca+'%'),
                                                                               ),
                                                                        Aluga.id_livro == Livro.id,
                                                                        Aluga.id_cliente == Cliente.id).all()
            return alugados;
        except Exception as e:
            raise DaoException('Erro ao Buscar Locações - Contatar o ADM')
