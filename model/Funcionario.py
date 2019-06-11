from model.Usuario import Usuario
from controle.App import db

class Funcionario(Usuario):
    db.__tablename__ = 'Funcionario'
    id = db.Column(db.Integer, db.Sequence('Funcionario_seq'), primary_key=True)
    cargo = db.Column(db.String(50), nullable=False)

