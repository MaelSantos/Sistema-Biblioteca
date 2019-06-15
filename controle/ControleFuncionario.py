from flask import render_template, session, redirect, url_for, request, json, Blueprint
from dao.DaoFuncionario import DaoFuncionario
from model.Funcionario import Funcionario

funcionario = Blueprint("funcionario", "Biblioteca", template_folder="../view", static_folder="../estilo")
daoFuncionario = DaoFuncionario()


@funcionario.route("/Funcionario/")
def admin():
    if 'admin' in session:
        template = render_template("cabecalho.html", inicio='active')
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

@funcionario.route("/Funcionario/Cadastrar/", methods=['POST'])
def cadastrar():
    try:
        nome = request.form['nome'];
        login = request.form['login'];
        senha = request.form['senha'];
        email = request.form['email'];
        cargo = request.form['cargo'];

        funcionarioM = Funcionario(cargo=cargo, nome=nome, login=login, senha=senha, email=email)
        daoFuncionario.create(funcionarioM)
        return json.dumps({'status': 'OK'});
    except Exception as e:
        return json.dumps({'status': 'Erro'});

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