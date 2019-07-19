"""empty message

Revision ID: 495c243c2f81
Revises: 
Create Date: 2019-07-19 10:56:02.692929

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '495c243c2f81'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Aluga')
    op.drop_index('codigo', table_name='Livro')
    op.drop_table('Livro')
    op.drop_table('Conta')
    op.drop_table('Funcionario')
    op.drop_index('email', table_name='Usuario')
    op.drop_index('login', table_name='Usuario')
    op.drop_table('Usuario')
    op.drop_table('Reserva')
    op.drop_index('cpf', table_name='Cliente')
    op.drop_table('Cliente')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Cliente',
    sa.Column('id', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.Column('cpf', mysql.VARCHAR(length=50), nullable=False),
    sa.Column('telefone', mysql.VARCHAR(length=50), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['Usuario.id'], name='Cliente_ibfk_1'),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    op.create_index('cpf', 'Cliente', ['cpf'], unique=True)
    op.create_table('Reserva',
    sa.Column('id', mysql.INTEGER(display_width=11), autoincrement=True, nullable=False),
    sa.Column('data_reserva', sa.DATE(), nullable=False),
    sa.Column('data_retirada', sa.DATE(), nullable=False),
    sa.Column('ativo', mysql.TINYINT(display_width=1), autoincrement=False, nullable=True),
    sa.Column('id_cliente', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.Column('id_livro', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.CheckConstraint('`ativo` in (0,1)', name='CONSTRAINT_1'),
    sa.ForeignKeyConstraint(['id_cliente'], ['Cliente.id'], name='Reserva_ibfk_1'),
    sa.ForeignKeyConstraint(['id_livro'], ['Livro.id'], name='Reserva_ibfk_2'),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    op.create_table('Usuario',
    sa.Column('id', mysql.INTEGER(display_width=11), autoincrement=True, nullable=False),
    sa.Column('nome', mysql.VARCHAR(length=50), nullable=False),
    sa.Column('login', mysql.VARCHAR(length=50), nullable=False),
    sa.Column('senha', mysql.VARCHAR(length=100), nullable=False),
    sa.Column('email', mysql.VARCHAR(length=50), nullable=False),
    sa.Column('ativo', mysql.TINYINT(display_width=1), autoincrement=False, nullable=True),
    sa.Column('tipo', mysql.VARCHAR(length=50), nullable=True),
    sa.CheckConstraint('`ativo` in (0,1)', name='CONSTRAINT_1'),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    op.create_index('login', 'Usuario', ['login'], unique=True)
    op.create_index('email', 'Usuario', ['email'], unique=True)
    op.create_table('Funcionario',
    sa.Column('id', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.Column('cargo', mysql.VARCHAR(length=50), nullable=False),
    sa.ForeignKeyConstraint(['id'], ['Usuario.id'], name='Funcionario_ibfk_1'),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    op.create_table('Conta',
    sa.Column('id', mysql.INTEGER(display_width=11), autoincrement=True, nullable=False),
    sa.Column('data_efetuada', sa.DATE(), nullable=False),
    sa.Column('data_pagamento', sa.DATE(), nullable=False),
    sa.Column('data_paga', sa.DATE(), nullable=True),
    sa.Column('multa', mysql.FLOAT(), nullable=True),
    sa.Column('valor_total', mysql.FLOAT(), nullable=True),
    sa.Column('ativo', mysql.TINYINT(display_width=1), autoincrement=False, nullable=True),
    sa.Column('id_aluga', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.CheckConstraint('`ativo` in (0,1)', name='CONSTRAINT_1'),
    sa.ForeignKeyConstraint(['id_aluga'], ['Aluga.id'], name='Conta_ibfk_1'),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    op.create_table('Livro',
    sa.Column('id', mysql.INTEGER(display_width=11), autoincrement=True, nullable=False),
    sa.Column('autor', mysql.VARCHAR(length=50), nullable=False),
    sa.Column('titulo', mysql.VARCHAR(length=50), nullable=False),
    sa.Column('ano', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.Column('editora', mysql.VARCHAR(length=50), nullable=False),
    sa.Column('codigo', mysql.VARCHAR(length=50), nullable=False),
    sa.Column('quantidade', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.Column('disponivel', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.Column('ativo', mysql.TINYINT(display_width=1), autoincrement=False, nullable=True),
    sa.CheckConstraint('`ativo` in (0,1)', name='CONSTRAINT_1'),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    op.create_index('codigo', 'Livro', ['codigo'], unique=True)
    op.create_table('Aluga',
    sa.Column('id', mysql.INTEGER(display_width=11), autoincrement=True, nullable=False),
    sa.Column('data_locacao', sa.DATE(), nullable=False),
    sa.Column('data_devolucao', sa.DATE(), nullable=False),
    sa.Column('data_devolvido', sa.DATE(), nullable=True),
    sa.Column('diaria', mysql.FLOAT(), nullable=False),
    sa.Column('ativo', mysql.TINYINT(display_width=1), autoincrement=False, nullable=True),
    sa.Column('id_funcionario', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.Column('id_cliente', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.Column('id_livro', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False),
    sa.CheckConstraint('`ativo` in (0,1)', name='CONSTRAINT_1'),
    sa.ForeignKeyConstraint(['id_cliente'], ['Cliente.id'], name='Aluga_ibfk_2'),
    sa.ForeignKeyConstraint(['id_funcionario'], ['Funcionario.id'], name='Aluga_ibfk_1'),
    sa.ForeignKeyConstraint(['id_livro'], ['Livro.id'], name='Aluga_ibfk_3'),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='utf8',
    mysql_engine='InnoDB'
    )
    # ### end Alembic commands ###
