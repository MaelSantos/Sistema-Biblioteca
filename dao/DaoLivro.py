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

    # public function busca_por_codigo($codigo)
    # {
    #     try {
    #         global $conexao;
    #
    #         $sql = $conexao->getPdo()->prepare("SELECT id FROM Livro WHERE codigo = :c");
    #         $sql->bindValue(":c", $codigo);
    #         $sql->execute();
    #
    #         return $sql->fetch()["id"];
    #
    #     } catch (\Throwable $th) {
    #         echo $e->getMessage();
    #         return null;
    #     }
    # }
    #
    #
    # public function busca_por_busca(Livro $livro)
    # {
    #     try {
    #         global $conexao;
    #
    #         $sql = $conexao->getPdo()->prepare("SELECT * FROM Livro WHERE (autor LIKE :a OR titulo LIKE :t OR ano LIKE :an OR editora LIKE :e OR codigo LIKE :c OR quantidade LIKE :q OR disponivel LIKE :d) AND ativo = true");
    #         $sql->bindValue(":a", "%".$livro->getAutor()."%");
    #         $sql->bindValue(":t", "%".$livro->getTitulo()."%");
    #         $sql->bindValue(":an", "%".$livro->getAno()."%");
    #         $sql->bindValue(":e", "%".$livro->getEditora()."%");
    #         $sql->bindValue(":c", "%".$livro->getCodigo()."%");
    #         $sql->bindValue(":q", "%".$livro->getQuantidade()."%");
    #         $sql->bindValue(":d", "%".$livro->getDisponivel()."%");
    #         $sql->execute();
    #
    #         $livros = array();
    #         $i = 0;
    #         while($row = $sql->fetch()) {
    #             $livros[$i]= $row;
    #             $i++;
    #         }
    #
    #         // echo json_encode($livros);
    #         return $livros;
    #
    #     } catch (\Throwable $th) {
    #         echo $e->getMessage();
    #     }
    # }