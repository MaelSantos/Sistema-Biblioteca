from flask import Flask, render_template, Blueprint

locacao = Blueprint("locacao", "Biblioteca", template_folder="../view", static_folder="../css")

@locacao.route("/Alugar/")
def alugar():
    template = render_template("cabecalho.html")
    template += render_template("aluga.html")
    template += render_template("rodape.html")
    return template

