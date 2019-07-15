from flask_migrate import Migrate
from controle.ControleApp import app, db, migrate
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

#Implementação da migration
# COMANDOS UTILIZADOS NO TERMINAL
# 1. é necessario exportar a aplicação para ter acesso ao migration pelo terminal. Usando: export FLASK_APP="app/Run.py"
# 2. flask db init - Cria o repositorio de migração
# 3. flask db migrate - gera uma migração inicial
# 4. flask db upgrade - aplica a migração ao banco de dados
# 5. flask db downgrade - remove a migração do banco de dados
# Obs: sempre que for atualizar o banco novamente para uma nova migration utilizar os comandos de migration e upgrade (passo 3 e 4)
# migrate = Migrate(app, db)

# db.create_all() #Criando tabelas no banco de dados
app.run()