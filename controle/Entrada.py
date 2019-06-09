from flask import Flask, render_template, Blueprint

entrada = Blueprint("entrada", "Biblioteca", template_folder="../view", static_folder="../css")

@entrada.route("/")
def index():
    template = render_template("cabecalho.html")
    template += render_template("index.html")
    template += render_template("rodape.html")
    return template

@entrada.route("/Sobre/")
def sobre():
    template = render_template("cabecalho.html")
    template += render_template("sobre.html")
    template += render_template("rodape.html")
    return template

@entrada.route("/Contados/")
def contatos():
    template = render_template("cabecalho.html")
    template += render_template("contatos.html")
    template += render_template("rodape.html")
    return template

