from controle.App import app, db
from model.Livro import Livro
a = Livro()

db.create_all()
app.run()

db.session.add(a)
db.session.commit()

