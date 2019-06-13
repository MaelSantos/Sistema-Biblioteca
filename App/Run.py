from controle.ControleApp import app, db
from controle.ControleEntrada import entrada
from controle.ControleCliente import cliente
from controle.ControleFuncionario import funcionario
from controle.ControleLivro import livro
from controle.ControleLocacao import locacao

#Registro dos controles
app.register_blueprint(entrada)
app.register_blueprint(cliente)
app.register_blueprint(funcionario)
app.register_blueprint(livro)
app.register_blueprint(locacao)

db.create_all()
app.run()