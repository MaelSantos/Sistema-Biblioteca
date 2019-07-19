from app.controle.ControleApp import db

class Aluga(db.Model):

    __tablename__ = 'Aluga'
    id = db.Column(db.Integer, db.Sequence('aluga_seq'), primary_key=True)
    data_locacao = db.Column(db.Date, nullable=False)
    data_devolucao = db.Column(db.Date, nullable=False)
    data_devolvido = db.Column(db.Date)
    diaria = db.Column(db.Float, nullable=False)
    ativo = db.Column(db.Boolean, default=True)
    id_funcionario = db.Column(db.Integer, db.ForeignKey('Funcionario.id'), nullable=False)
    id_cliente = db.Column(db.Integer, db.ForeignKey('Cliente.id'), nullable=False)
    id_livro = db.Column(db.Integer, db.ForeignKey('Livro.id'), nullable=False)
