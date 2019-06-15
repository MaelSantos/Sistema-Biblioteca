from controle.ControleApp import db

class Conta(db.Model):
    __tablename__ = 'Conta'
    id = db.Column(db.Integer, db.Sequence('conta_seq'), primary_key=True)
    data_efetuada = db.Column(db.Date, nullable=False)
    data_pagamento = db.Column(db.Date, nullable=False)
    data_paga = db.Column(db.Date)
    multa = db.Column(db.Float, default=0.0)
    valor_total = db.Column(db.Float)
    ativo = db.Column(db.Boolean, default=True)
    id_aluga = db.Column(db.Integer, db.ForeignKey('Aluga.id'), nullable=False)
