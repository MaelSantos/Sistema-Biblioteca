from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from controle.Entrada import entrada
from controle.Cliente import cliente
from controle.Funcionario import funcionario
from controle.Livro import livro
from controle.Locacao import locacao

app = Flask("Biblioteca", template_folder="../view", static_folder="../css")
app.register_blueprint(entrada)
app.register_blueprint(cliente)
app.register_blueprint(funcionario)
app.register_blueprint(livro)
app.register_blueprint(locacao)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/Teste'
db = SQLAlchemy(app)
# db.create_all()
# app.run()