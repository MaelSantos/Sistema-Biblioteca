import os
from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

#Crição do App Principal
app = Flask(__name__, template_folder="../view", static_folder="../estilo")

#Configurações do Banco
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:@localhost/Biblioteca?charset=utf8"
app.config["SECRET_KEY"] = "babidi"
app.config["JSONIFY_PRETTYPRINT_REGULAR"] = True
# app.config["FLASK_APP"] = "Run.py"
FLASK_APP = "app.py"

db = SQLAlchemy(app)

#Implementação da migration
# COMANDOS UTILIZADOS NO TERMINAL
# 1. é necessario exportar a aplicação usando: export FLASK_APP="controle/ControleApp.py""
# 2. flask db init - Cria o repositorio de migração
# 3. flask db migrate - gera uma migração inicial
# 4. flask db upgrade - aplica a migração ao banco de dados
# 5. flask db downgrade - remove a migração do banco de dados
# Obs: sempre que for atualizar o banco novamente para uma nova migration utilizar os comandos de migration e upgrade (passo 3 e 4)
migrate = Migrate(app, db)