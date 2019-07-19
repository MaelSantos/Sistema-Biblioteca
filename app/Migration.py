from .controle.ControleApp import app, db, migrate
from .model.Usuario import Usuario
from .model.Cliente import Cliente
from .model.Funcionario import Funcionario
from .model.Livro import Livro
from .model.Aluga import Aluga
from .model.Conta import Conta
from .model.Reserva import Reserva

#Implementação da migration
# COMANDOS UTILIZADOS NO TERMINAL
# 1. é necessario exportar a aplicação para ter acesso ao migration pelo terminal.
# Usando:
# export FLASK_APP="app/Migration.py" (Linux)
# SET FLASK_APP=app/Migration.py (Windows)
# 2. flask db init - Cria o repositorio de migração
# 3. flask db migrate - gera uma migração inicial
# 4. flask db upgrade - aplica a migração ao banco de dados
# 5. flask db downgrade - remove a migração do banco de dados
# Obs: sempre que for atualizar o banco novamente para uma nova migration utilizar os comandos de migration e upgrade (passo 3 e 4)