from flask import Flask, render_template, Blueprint

livro = Blueprint("livro", "Biblioteca", template_folder="../view", static_folder="../css")

@livro.route("/Livro/Acervo/")
def acervo():
    template = render_template("cabecalho.html")
    template += render_template("acervo.html")
    template += render_template("rodape.html")
    return template

@livro.route("/Livro/Reserva/")
def reserva():
    template = render_template("cabecalho.html")
    template += render_template("reserva.html")
    template += render_template("rodape.html")
    return template

@livro.route("/Livro/Cadastro/")
def cadastro():
    template = render_template("cabecalho.html")
    template += render_template("cadastro_livro.html")
    template += render_template("rodape.html")
    return template
