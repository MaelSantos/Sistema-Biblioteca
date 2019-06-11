from controle.App import db

class Reserva(db.Model):
    db.__tablename__ = 'Reserva'
    id = db.Column(db.Integer, db.Sequence('reserva_seq'), primary_key=True)
    data_reserva = db.Column(db.Date, nullable=False)
    data_retirada = db.Column(db.Date, nullable=False)
    ativo = db.Column(db.Boolean, nullable=False)
    id_cliente = db.Column(db.Integer, db.ForeignKey('Cliente.id'), nullable=False)
    id_livro = db.Column(db.Integer, db.ForeignKey('Livro.id'), nullable=False)
