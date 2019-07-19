from controle.ControleApp import db
from dao.Dao import Dao
from exception.DaoException import DaoException
from model.Livro import Livro

class DaoLivro(Dao):

    def search_id(self, id):
        try:
            return super().search_id(Livro, id)
        except Exception as e:
            raise DaoException('Erro ao Buscar - Contatar o ADM')

    def search_all(self):
        try:
            return super().search_all(Livro)
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos - Contatar o ADM')

    def search_codigo(self, codigo):
        try:
            livro = self.session.query(Livro).filter(Livro.codigo == codigo, Livro.ativo == True).first()
            return livro;
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos - Contatar o ADM')

    def search_search(self, busca):
        try:
            livros = self.session.query(Livro).filter(db.or_(Livro.codigo.ilike('%'+busca+'%'),
                                                     Livro.titulo.ilike('%'+busca+'%'),
                                                    Livro.editora.ilike('%'+busca+'%'),
                                                    Livro.autor.ilike('%'+busca+'%'),
                                                     Livro.disponivel.ilike('%' + busca + '%'),
                                                     Livro.quantidade.ilike('%' + busca + '%'),
                                                      Livro.ano.ilike('%' + busca + '%')),
                                                     Livro.ativo == True).all()
            return livros;
        except Exception as e:
            raise DaoException('Erro ao Buscar Todos - Contatar o ADM')
