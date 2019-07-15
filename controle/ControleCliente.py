from flask import render_template, session, redirect, url_for, request, json, Blueprint
from dao.DaoCliente import DaoCliente
from model.Cliente import Cliente

cliente = Blueprint("cliente", "Biblioteca", template_folder="../view", static_folder="../estilo")
daoCliente = DaoCliente()

@cliente.route("/Cliente/")
def inicio():
    if 'logado' in session:
        template = render_template("cabecalho.html", inicio='active')
        template += render_template("logado.html")
        template += render_template("inicio.html")
        template += render_template("rodape.html", rodape="fixed-bottom")
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

@cliente.route("/Cliente/Cadastrar/", methods=['POST'])
def cadastrar():
    try:
        nome = request.form['nome'];
        login = request.form['login'];
        senha = request.form['senha'];
        email = request.form['email'];
        cpf = request.form['cpf'];
        telefone = request.form['telefone'];

        clienteM = Cliente(nome=nome,login=login, senha=senha, email=email, cpf=cpf, telefone=telefone)
        daoCliente.create(clienteM)
        return json.dumps({'status': 'OK'});
    except Exception as e:
        return json.dumps({'status': 'Erro'});

@cliente.route("/Cliente/Editar/", methods=['POST'])
def editar():
    try:
        nome = request.form['nome'];
        login = request.form['login'];
        senha = request.form['senha'];
        email = request.form['email'];
        cpf = request.form['cpf'];
        telefone = request.form['telefone'];

        clienteM = daoCliente.search_id(session['logado'])
        clienteM.nome=nome
        clienteM.login=login
        clienteM.senha=senha
        clienteM.email=email
        clienteM.cpf=cpf
        clienteM.telefone=telefone
        daoCliente.update(clienteM)
        return json.dumps({'status': 'OK'});
    except Exception as e:
        return json.dumps({'status': 'Erro'});

@cliente.route("/Cliente/Perfil/")
def perfil():
    if 'logado' in session:
        logado = session.get('logado')
        template = render_template("cabecalho.html")
        template += render_template("logado.html", perfil='active')
        template += render_template("perfil.html")
        template += render_template("rodape.html", rodape="fixed-bottom")
        return template
    else:
        return redirect(url_for('entrada.index'))

@cliente.route("/Cliente/Buscar/", methods=['POST'])
def busca_busca():
    try:
        busca = request.form['busca'];

        clientes = daoCliente.search_search(busca)

        j = []
        for l in clientes:
            j.append({
                'id': l.id,
                'nome': l.nome,
                'login': l.login,
                'email': l.email,
                'cpf': l.cpf,
                'telefone': l.telefone,
            })
        return json.dumps(j)

    except Exception as e:
        return json.dumps({'status': 'Erro'});

@cliente.route("/Cliente/Perfil/Buscar/", methods=['POST'])
def busca_perfil():
    try:

        clienteM = daoCliente.search_id(session['logado'])

        j = [{
                'id': clienteM.id,
                'nome': clienteM.nome,
                'login': clienteM.login,
                'email': clienteM.email,
                'cpf': clienteM.cpf,
                'telefone': clienteM.telefone,
                'senha': clienteM.senha,
            }]

        return json.dumps(j)

    except Exception as e:
        return json.dumps({'status': 'Erro'});

@cliente.route("/Cliente/Remover/", methods=['POST'])
def remover():
    try:
        id = request.form['id'];

        clienteM =daoCliente.search_id(id)
        daoCliente.remove(clienteM)
        return json.dumps({'status': 'Ok'});

    except Exception as e:
        return json.dumps({'status': 'Erro'});