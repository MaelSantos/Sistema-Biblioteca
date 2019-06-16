from flask import render_template, session, redirect, url_for, request, json, Blueprint
from dao.DaoLivro import DaoLivro
from dao.DaoCliente import DaoCliente
from dao.DaoReserva import DaoReserva
from model.Livro import Livro
from model.Reserva import Reserva

livro = Blueprint("livro", "Biblioteca", template_folder="../view", static_folder="../estilo")
daoLivro = DaoLivro()
daoCliente = DaoCliente()
daoReserva = DaoReserva()

@livro.route("/Livro/Acervo/")
def acervo():
    if 'logado' in session or 'admin' in session:
        template = render_template("cabecalho.html")
        template += render_template("logado.html", acervo = 'active')
        template += render_template("acervo.html")
        template += render_template("rodape.html")
        return template
    else:
        return redirect(url_for("entrada.index"))

@livro.route("/Livro/Buscar/", methods=['POST'])
def buscar():
    try:
        busca = request.form["busca"]
        livros = daoLivro.search_search(busca)

        j = []
        for l in livros:
            j.append({
                'id': l.id,
                'autor' : l.autor,
                'titulo' : l.titulo,
                'ano' : l.ano,
                'editora' : l.editora,
                'codigo' : l.codigo,
                'quantidade' : l.quantidade,
                'disponivel' : l.disponivel
            })
        return json.dumps(j)
    except Exception as e:
        return json.dumps({"status': 'Erro"})


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

@livro.route("/Livro/Cadastrar/", methods=['POST'])
def cadastrar():
    try:
        autor = request.form['autor'];
        titulo = request.form['titulo'];
        ano = request.form['ano'];
        editora = request.form['editora'];
        codigo = request.form['codigo'];
        quantidade = request.form['quantidade'];
        disponivel = request.form['disponivel'];

        livroM = Livro(autor=autor, titulo=titulo, ano=ano, editora=editora, codigo=codigo, quantidade=quantidade, disponivel=disponivel)
        daoLivro.create(livroM)
        return json.dumps({'status': 'OK'});
    except Exception as e:
        return json.dumps({'status': 'Erro'});
