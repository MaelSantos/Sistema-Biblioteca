from flask import render_template, session, redirect, url_for, Blueprint
from dao.DaoUsuario import DaoUsuario

entrada = Blueprint("entrada", "Biblioteca", template_folder="../view", static_folder="../css")
daoUsuario = DaoUsuario()

@entrada.route("/")
def index():
    if 'logado' in session:
        redirect(url_for('cliente.inicio'))
    elif 'admin' in session:
        redirect(url_for('funcionario.admin'))
    else:
        template = render_template("cabecalho.html", inicio='active')
        template += render_template("entrada.html")
        template += render_template("index.html")
        template += render_template("rodape.html")
        return template

@entrada.route("/Sobre/")
def sobre():
    template = render_template("cabecalho.html", sobre='active')
    template += render_template("entrada.html")
    template += render_template("sobre.html")
    template += render_template("rodape.html")
    return template

@entrada.route("/Contados/")
def contatos():
    template = render_template("cabecalho.html", contatos='active')
    template += render_template("entrada.html")
    template += render_template("contatos.html")
    template += render_template("rodape.html")
    return template

@entrada.route("/Login/")
def login():
    template = render_template("cabecalho.html")
    template += render_template("entrada.html", login='active')
    template += render_template("login.html")
    template += render_template("rodape.html")
    return template

@entrada.route("/Login/<login>/<senha>")
def logar(login=None, senha=None):
    usuario = daoUsuario.login(login, senha)

    if(usuario != None):
        if usuario.tipo == 'Cliente':
            session['logado'] = usuario.id
            return redirect(url_for('cliente.inicio'))
        elif usuario.tipo == 'Funcionario':
            session['admin'] = usuario.id
            return redirect(url_for('funcionario.admin'))

    return redirect(url_for('entrada.login'))

@entrada.route("/Perfil/")
def perfil():

    if 'logado' in session:
        return redirect(url_for('cliente.perfil'))
    elif 'admin' in session:
        return redirect(url_for('funcionario.perfil'))
    else:
        return redirect(url_for('entrada.index'))

@entrada.route('/Logout/')
def logout():
    session.pop('logado', None)
    session.pop('admin', None)
    return redirect(url_for('entrada.index'))