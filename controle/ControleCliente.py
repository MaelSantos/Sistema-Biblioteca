from flask import render_template, session, redirect, url_for, Blueprint

cliente = Blueprint("cliente", "Biblioteca", template_folder="../view", static_folder="../css")

@cliente.route("/Cliente/")
def inicio():
    if 'logado' in session:
        template = render_template("cabecalho.html")
        template += render_template("logado.html")
        template += render_template("inicio.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))


@cliente.route("/Cliente/Cadastro/")
def cadastro():
    template = render_template("cabecalho.html")
    template += render_template("entrada.html", cadastro='active')
    template += render_template("cadastro_cliente.html")
    template += render_template("rodape.html")
    return template

@cliente.route("/Cliente/Perfil/")
def perfil():
    if 'logado' in session:
        logado = session.get('logado')
        template = render_template("cabecalho.html")
        template += render_template("logado.html", perfil='active')
        template += render_template("perfil.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))