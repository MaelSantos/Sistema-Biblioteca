from flask import Flask
from flask_sqlalchemy import SQLAlchemy

#Crição do App Principal
app = Flask("Biblioteca", template_folder="../view", static_folder="../estilo")

#Configurações do Banco
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/Biblioteca?charset=utf8'
db = SQLAlchemy(app)
app.config["SECRET_KEY"] = "babidi"


