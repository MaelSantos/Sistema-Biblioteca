from flask import render_template, session, redirect, url_for, request, json, Blueprint
from dao.DaoAluga import DaoAluga
from dao.DaoCliente import DaoCliente
from dao.DaoLivro import DaoLivro
from dao.DaoConta import DaoConta
from model.Aluga import Aluga
from model.Conta import Conta

locacao = Blueprint('locacao', 'Biblioteca', template_folder='../view', static_folder='../estilo')
daoAluga = DaoAluga()
daoCliente = DaoCliente()
daoLivro = DaoLivro()
daoConta = DaoConta()

@locacao.route('/Locação/')
def aloga():
    if 'admin' in session:
        template = render_template("cabecalho.html")
        template += render_template("logado.html")
        template += render_template("aluga.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))

@locacao.route('/Locação/Alugar/', methods=['POST'])
def alugar():
    try:
        data_locacao = request.form['data_locacao'];
        diaria = request.form['diaria'];
        data_devolucao = request.form['data_devolucao'];
        id_cliente = request.form['id_cliente'];
        id_livro = request.form['id_livro'];

        id_funcionario = session['admin']

        cliente = daoCliente.search_cpf(id_cliente)
        livro = daoLivro.search_codigo(id_livro)

        alugaM = Aluga(data_locacao=data_locacao, data_devolucao=data_devolucao, diaria=diaria, id_funcionario=id_funcionario, id_cliente=cliente.id, id_livro=livro.id)
        id_aluga = daoAluga.create(alugaM)
        conta = Conta(data_efetuada=data_locacao, data_pagamento=data_devolucao, valor_total=(diaria*7), id_aluga=id_aluga)
        daoConta.create(conta)

        return json.dumps({'status': 'OK'});
    except Exception as e:
        return json.dumps({'status': 'Erro', 'Erro': e.args});

@locacao.route('/Locação/Buscar/', methods=['POST'])
def buscar():
    try:
        alugados = daoAluga.search_id_cliente(session['logado'])

        j = []
        for r in alugados:
            j.append({
                'id': r[0].id,
                'titulo' : r[2].titulo,
                'data_locacao' : r[0].data_locacao,
                'data_devolucao' : r[0].data_devolucao,
                'diaria' : r[0].diaria,
                'funcionario' : r[3].nome,
                'cliente' : r[1].nome,
            })
        return json.dumps(j)

    except Exception as e:
        return json.dumps({'status': 'Erro', 'Erro': e.args});

@locacao.route('/Locação/Buscar/Buscar/', methods=['POST'])
def busca_busca():
    try:
        busca = request.form['busca'];
        alugados = daoAluga.search_search(busca)

        j = []
        for r in alugados:
            j.append({
                'id': r[0].id,
                'titulo' : r[2].titulo,
                'data_locacao' : r[0].data_locacao,
                'data_devolucao' : r[0].data_devolucao,
                'diaria' : r[0].diaria,
                # 'funcionario' : r[3].nome,
                'cliente' : r[1].nome,
                'ativo': r[0].ativo,
            })
        return json.dumps(j)

    except Exception as e:
        return json.dumps({'status': 'Erro', 'Erro': e.args});


@locacao.route('/Locação/Remover/', methods=['POST'])
def remover():
    try:
        id = request.form['id'];
        alugado = daoAluga.search_id(id)
        daoAluga.remove(alugado)
        return json.dumps({'status': 'Ok'});

    except Exception as e:
        return json.dumps({'status': 'Erro', 'Erro': e.args});