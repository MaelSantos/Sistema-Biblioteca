from flask import render_template, session, redirect, url_for, request, json, Blueprint
from dao.DaoUsuario import DaoUsuario

entrada = Blueprint("entrada", "Biblioteca", template_folder="../view", static_folder="../estilo")
daoUsuario = DaoUsuario()

@entrada.route("/")
def index():
    if 'logado' in session:
        return redirect(url_for('cliente.inicio'))
    elif 'admin' in session:
        return redirect(url_for('funcionario.admin'))
    else:
        template = render_template("cabecalho.html", inicio='active')
        template += render_template("entrada.html")
        template += render_template("index.html")
        template += render_template("rodape.html")
        return template

@entrada.route("/Sobre/")
def sobre():
    template = render_template("cabecalho.html", sobre='active')
    if 'logado' in session or 'admin' in session:
        template += render_template("logado.html")
    else:
        template += render_template("entrada.html")
    template += render_template("sobre.html")
    template += render_template("rodape.html")
    return template

@entrada.route("/Contados/")
def contatos():
    template = render_template("cabecalho.html", contatos='active')
    if 'logado' in session or 'admin' in session:
        template += render_template("logado.html")
    else:
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

@entrada.route("/Logar/", methods=['POST'])
def logar():

    login = request.form['login'];
    senha = request.form['senha'];

    usuario = daoUsuario.login(login, senha)

    if(usuario != None):
        if usuario.tipo == 'Cliente':
            session['logado'] = usuario.id
            return json.dumps({'status': 'OK', 'cliente' : usuario.id})
        elif usuario.tipo == 'Funcionario':
            session['admin'] = usuario.id
            return json.dumps({'status': 'OK', 'cliente' : usuario.id})

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