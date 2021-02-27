"""empty message

Revision ID: b44e1772f28b
Revises: 
Create Date: 2019-07-19 14:10:22.435457

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b44e1772f28b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Livro',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('autor', sa.String(length=50), nullable=False),
    sa.Column('titulo', sa.String(length=50), nullable=False),
    sa.Column('ano', sa.Integer(), nullable=False),
    sa.Column('editora', sa.String(length=50), nullable=False),
    sa.Column('codigo', sa.String(length=50), nullable=False),
    sa.Column('quantidade', sa.Integer(), nullable=False),
    sa.Column('disponivel', sa.Integer(), nullable=False),
    sa.Column('ativo', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('codigo')
    )
    op.create_table('Usuario',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nome', sa.String(length=50), nullable=False),
    sa.Column('login', sa.String(length=50), nullable=False),
    sa.Column('senha', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=50), nullable=False),
    sa.Column('ativo', sa.Boolean(), nullable=True),
    sa.Column('tipo', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('login')
    )
    op.create_table('Cliente',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('cpf', sa.String(length=50), nullable=False),
    sa.Column('telefone', sa.String(length=50), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['Usuario.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('cpf')
    )
    op.create_table('Funcionario',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('cargo', sa.String(length=50), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['Usuario.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Aluga',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('data_locacao', sa.Date(), nullable=False),
    sa.Column('data_devolucao', sa.Date(), nullable=False),
    sa.Column('data_devolvido', sa.Date(), nullable=True),
    sa.Column('diaria', sa.Float(), nullable=False),
    sa.Column('ativo', sa.Boolean(), nullable=True),
    sa.Column('id_funcionario', sa.Integer(), nullable=False),
    sa.Column('id_cliente', sa.Integer(), nullable=False),
    sa.Column('id_livro', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_cliente'], ['Cliente.id'], ),
    sa.ForeignKeyConstraint(['id_funcionario'], ['Funcionario.id'], ),
    sa.ForeignKeyConstraint(['id_livro'], ['Livro.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Reserva',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('data_reserva', sa.Date(), nullable=False),
    sa.Column('data_retirada', sa.Date(), nullable=False),
    sa.Column('ativo', sa.Boolean(), nullable=True),
    sa.Column('id_cliente', sa.Integer(), nullable=False),
    sa.Column('id_livro', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_cliente'], ['Cliente.id'], ),
    sa.ForeignKeyConstraint(['id_livro'], ['Livro.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Conta',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('data_efetuada', sa.Date(), nullable=False),
    sa.Column('data_pagamento', sa.Date(), nullable=False),
    sa.Column('data_paga', sa.Date(), nullable=True),
    sa.Column('multa', sa.Float(), nullable=True),
    sa.Column('valor_total', sa.Float(), nullable=True),
    sa.Column('ativo', sa.Boolean(), nullable=True),
    sa.Column('id_aluga', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_aluga'], ['Aluga.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Conta')
    op.drop_table('Reserva')
    op.drop_table('Aluga')
    op.drop_table('Funcionario')
    op.drop_table('Cliente')
    op.drop_table('Usuario')
    op.drop_table('Livro')
    # ### end Alembic commands ###