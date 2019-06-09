from flask import Flask, render_template, Blueprint

cliente = Blueprint("cliente", "Biblioteca", template_folder="../view", static_folder="../css")

@cliente.route("/Cliente/")
def inicio():
    template = render_template("cabecalho.html")
    template += render_template("inicio.html")
    template += render_template("rodape.html")
    return template

@cliente.route("/Cliente/Login/")
def login():
    template = render_template("cabecalho.html")
    template += render_template("login_cliente.html")
    template += render_template("rodape.html")
    return template

@cliente.route("/Cliente/Cadastro/")
def cadastro():
    template = render_template("cabecalho.html")
    template += render_template("cadastro_cliente.html")
    template += render_template("rodape.html")
    return template

@cliente.route("/Cliente/Perfil/")
def perfil():
    template = render_template("cabecalho.html")
    template += render_template("perfil.html")
    template += render_template("rodape.html")
    return template