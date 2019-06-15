from model.Usuario import Usuario
from controle.ControleApp import db

class Funcionario(Usuario):
    __tablename__ = 'Funcionario'
    id = db.Column(db.Integer, db.ForeignKey(Usuario.id), db.Sequence('Funcionario_seq'), primary_key=True)
    cargo = db.Column(db.String(50), nullable=False)

    __mapper_args__ = {
        'polymorphic_identity': 'Funcionario'
    }

