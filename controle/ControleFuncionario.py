from flask import render_template, session, redirect, url_for, Blueprint

funcionario = Blueprint("funcionario", "Biblioteca", template_folder="../view", static_folder="../css")

@funcionario.route("/Funcionario/")
def admin():
    if 'admin' in session:
        template = render_template("cabecalho.html")
        template += render_template("logado.html")
        template += render_template("admin.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))

@funcionario.route("/Funcionario/Cadastro/")
def cadastro():
    if 'admin' in session:
        template = render_template("cabecalho.html")
        template += render_template("logado.html")
        template += render_template("cadastro_funcionario.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))

@funcionario.route("/Funcionario/Perfil/")
def perfil():
    if 'admin' in session:
        template = render_template("cabecalho.html")
        template += render_template("logado.html", perfil='active')
        template += render_template("perfil.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))