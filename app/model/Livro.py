from app.controle.ControleApp import db

class Livro(db.Model):
    __tablename__ = 'Livro'
    id = db.Column(db.Integer, db.Sequence('livro_seq'), primary_key=True)
    autor = db.Column(db.String(50), nullable=False)
    titulo = db.Column(db.String(50), nullable=False)
    ano = db.Column(db.Integer, nullable=False)
    editora = db.Column(db.String(50), nullable=False)
    codigo = db.Column(db.String(50), unique=True, nullable=False)
    quantidade = db.Column(db.Integer, nullable=False)
    disponivel = db.Column(db.Integer, nullable=False)
    ativo = db.Column(db.Boolean, default=True)
