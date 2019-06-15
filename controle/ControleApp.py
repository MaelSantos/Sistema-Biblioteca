from flask import Flask
from flask_sqlalchemy import SQLAlchemy

#Crição do App Principal
app = Flask("Biblioteca", template_folder="../view", static_folder="../estilo")

#Configurações do Banco
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/Biblioteca?charset=utf8'
app.config["SECRET_KEY"] = "babidi"
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
db = SQLAlchemy(app)

