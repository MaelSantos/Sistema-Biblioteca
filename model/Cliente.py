from model.Usuario import Usuario
from controle.ControleApp import db

class Cliente(Usuario):

    __tablename__ = 'Cliente'
    id = db.Column(db.Integer, db.ForeignKey(Usuario.id), db.Sequence('cliente_seq'), primary_key=True)
    cpf = db.Column(db.String(50), unique=True, nullable=False)
    telefone = db.Column(db.String(50), nullable=False)

    __mapper_args__ = {
        'polymorphic_identity': 'Cliente',
        # 'polymorphic_map': 'Cliente'
    }