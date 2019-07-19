from flask import render_template, session, redirect, url_for, request, json, Blueprint
from datetime import date
from dao.DaoConta import DaoConta
from dao.DaoAluga import DaoAluga

conta = Blueprint('conta', 'Biblioteca', template_folder='view', static_folder='estilo')
daoConta = DaoConta()
daoAluga = DaoAluga()

@conta.route('/Conta/Buscar/', methods=['POST'])
def buscar():
    try:
        busca = request.form['busca'];

        contas = daoConta.search_search(busca)

        j = []
        for c in contas:
            j.append({
                'id': c.id,
                'id_aluga': c.id_aluga,
                'data_efetuada': c.data_efetuada,
                'data_pagamento': c.data_pagamento,
                'data_paga': c.data_paga,
                'valor_total': c.valor_total,
                'multa': c.multa,
                'ativo': c.ativo,
            })

        return json.dumps(j)

    except Exception as e:
        return json.dumps({'status': 'Erro', 'Erro': e.args});

@conta.route("/Conta/Remover/", methods=['POST'])
def remover():
    try:
        id = request.form['id'];

        contaM = daoConta.search_id(id)
        contaM.data_paga = date.today()
        daoConta.remove(contaM)

        aluga = daoAluga.search_id(id)
        aluga.data_devolvido = date.today()
        daoAluga.remove(aluga)

        return json.dumps({'status': 'Ok'});

    except Exception as e:
        return json.dumps({'status': 'Erro'});