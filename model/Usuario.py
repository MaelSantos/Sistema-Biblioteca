from controle.ControleApp import db

class Usuario(db.Model):
    __tablename__ = 'Usuario'
    id = db.Column(db.Integer, db.Sequence('usuario_seq'), primary_key=True)
    nome = db.Column(db.String(50), nullable=False)
    login = db.Column(db.String(50), unique=True, nullable=False)
    senha = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    ativo = db.Column(db.Boolean, default=True)
    tipo = db.Column(db.String(50))

    __mapper_args__ = {
        'polymorphic_identity': 'Usuario',
        'polymorphic_on': tipo,
    }