
class DaoException(Exception):

    def __init__(self, mensagem):
        super(DaoException, self).__init__(mensagem)