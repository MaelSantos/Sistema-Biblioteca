from flask import render_template, session, redirect, url_for, Blueprint

locacao = Blueprint("locacao", "Biblioteca", template_folder="../view", static_folder="../estilo")

@locacao.route("/Alugar/")
def alugar():
    if 'admin' in session:
        template = render_template("cabecalho.html")
        template += render_template("logado.html")
        template += render_template("aluga.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))

