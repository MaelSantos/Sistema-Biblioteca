from flask import Flask, render_template, Blueprint

funcionario = Blueprint("funcionario", "Biblioteca", template_folder="../view", static_folder="../css")

@funcionario.route("/Funcionario/")
def admin():
    template = render_template("cabecalho.html")
    template += render_template("admin.html")
    template += render_template("rodape.html")
    return template

@funcionario.route("/Funcionario/Login/")
def login():
    template = render_template("cabecalho.html")
    template += render_template("login_funcionario.html")
    template += render_template("rodape.html")
    return template

@funcionario.route("/Funcionario/Cadastro/")
def cadastro():
    template = render_template("cabecalho.html")
    template += render_template("cadastro_funcionario.html")
    template += render_template("rodape.html")
    return template

@funcionario.route("/Funcionario/Perfil/")
def perfil():
    template = render_template("cabecalho.html")
    template += render_template("perfil.html")
    template += render_template("rodape.html")
    return template