from model.Usuario import Usuario
from controle.App import db

class Cliente(Usuario):

    __tablename__ = 'Cliente'
    id = db.Column(db.Integer, db.Sequence('cliente_seq'), primary_key=True)
    cpf = db.Column(db.String(50), unique=True, nullable=False)
    telefone = db.Column(db.String(50), nullable=False)