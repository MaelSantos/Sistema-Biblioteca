from flask import render_template, session, redirect, url_for, Blueprint

livro = Blueprint("livro", "Biblioteca", template_folder="../view", static_folder="../css")

@livro.route("/Livro/Acervo/")
def acervo():
    if 'logado' in session or 'admin' in session:
        template = render_template("cabecalho.html")
        template += render_template("logado.html")
        template += render_template("acervo.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))

@livro.route("/Livro/Reserva/")
def reserva():
    if 'logado' in session:
        template = render_template("cabecalho.html")
        template += render_template("logado.html")
        template += render_template("reserva.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))

@livro.route("/Livro/Cadastro/")
def cadastro():
    if 'admin' in session:
        template = render_template("cabecalho.html")
        template += render_template("logado.html")
        template += render_template("cadastro_livro.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))
