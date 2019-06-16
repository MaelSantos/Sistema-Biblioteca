from flask import render_template, session, redirect, url_for, request, json, Blueprint
from dao.DaoLivro import DaoLivro
from dao.DaoCliente import DaoCliente
from dao.DaoReserva import DaoReserva
from model.Reserva import Reserva

reserva = Blueprint("reserva", "Biblioteca", template_folder="../view", static_folder="../estilo")
daoLivro = DaoLivro()
daoCliente = DaoCliente()
daoReserva = DaoReserva()

@reserva.route("/Livro/Reserva/<codigo>/<login>")
def reserva_entrar(codigo, login):
    if 'logado' in session:

        cliente = daoCliente.search_login(login)

        template = render_template("cabecalho.html")
        template += render_template("logado.html")
        template += render_template("reserva.html", codigo=codigo, cliente=cliente.cpf)
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for('entrada.index'))

@reserva.route("/Livro/Reservar/", methods=['POST'])
def reservar():
    try:
        data_reserva = request.form['data_reserva'];
        data_retirada = request.form['data_retirada'];
        id_livro = request.form['id_livro'];
        id_cliente = request.form['id_cliente'];

        clienteM = daoCliente.search_cpf(id_cliente)
        livroM = daoLivro.search_codigo(id_livro)

        reservaM = Reserva(data_reserva=data_reserva, data_retirada=data_retirada, id_livro=livroM.id, id_cliente=clienteM.id)
        daoReserva.create(reservaM)
        return json.dumps({'status': 'OK'});
    except Exception as e:
        return json.dumps({'status': 'Erro'});

@reserva.route("/Livro/Reserva/Buscar/", methods=['POST'])
def buscar_reserva():
    try:
        reservas = daoReserva.search_id_cliente(session['logado'])

        j = []
        for r in reservas:
            j.append({
                'id' : r[0].id,
                'titulo' : r[2].titulo,
                'data_reserva' : r[0].data_reserva,
                'data_retirada' : r[0].data_retirada,
                'nome' : r[1].nome
            })
        return json.dumps(j)
    except Exception as e:
        return json.dumps({"status': 'Erro"})

@reserva.route("/Livro/Reserva/Cancelar/", methods=['POST'])
def cancelar_reserva():
    try:

        id = request.form['id'];
        reservaM = daoReserva.search_id(id)
        daoReserva.remove(reservaM)

        return json.dumps({"status": "Ok"})
    except Exception as e:
        return json.dumps({"status": "Erro"})
