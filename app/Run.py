from controle.ControleApp import app, db
from controle.ControleEntrada import entrada
from controle.ControleCliente import cliente
from controle.ControleFuncionario import funcionario
from controle.ControleLivro import livro
from controle.ControleReserva import reserva
from controle.ControleLocacao import locacao
from controle.ControleConta import conta

#Registro dos controles
app.register_blueprint(entrada)
app.register_blueprint(cliente)
app.register_blueprint(funcionario)
app.register_blueprint(livro)
app.register_blueprint(reserva)
app.register_blueprint(locacao)
app.register_blueprint(conta)

db.create_all() #Criando tabelas no banco de dados
app.run()