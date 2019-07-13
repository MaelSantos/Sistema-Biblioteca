-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 13-Jul-2019 às 19:46
-- Versão do servidor: 10.3.16-MariaDB
-- versão do PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `Biblioteca`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `alembic_version`
--

CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Aluga`
--

CREATE TABLE `Aluga` (
  `id` int(11) NOT NULL,
  `data_locacao` date NOT NULL,
  `data_devolucao` date NOT NULL,
  `data_devolvido` date DEFAULT NULL,
  `diaria` float NOT NULL,
  `ativo` tinyint(1) DEFAULT NULL,
  `id_funcionario` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL
) ;

--
-- Extraindo dados da tabela `Aluga`
--

INSERT INTO `Aluga` (`id`, `data_locacao`, `data_devolucao`, `data_devolvido`, `diaria`, `ativo`, `id_funcionario`, `id_cliente`, `id_livro`) VALUES
(1, '2019-07-11', '2019-07-10', '2019-07-11', 10, 1, 1, 4, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Cliente`
--

CREATE TABLE `Cliente` (
  `id` int(11) NOT NULL,
  `cpf` varchar(50) NOT NULL,
  `telefone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Cliente`
--

INSERT INTO `Cliente` (`id`, `cpf`, `telefone`) VALUES
(3, '23432424', '32421412'),
(4, '433241', 'fds3242');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Conta`
--

CREATE TABLE `Conta` (
  `id` int(11) NOT NULL,
  `data_efetuada` date NOT NULL,
  `data_pagamento` date NOT NULL,
  `data_paga` date DEFAULT NULL,
  `multa` float DEFAULT NULL,
  `valor_total` float DEFAULT NULL,
  `ativo` tinyint(1) DEFAULT NULL,
  `id_aluga` int(11) NOT NULL
) ;

--
-- Extraindo dados da tabela `Conta`
--

INSERT INTO `Conta` (`id`, `data_efetuada`, `data_pagamento`, `data_paga`, `multa`, `valor_total`, `ativo`, `id_aluga`) VALUES
(1, '2019-07-01', '2019-07-10', '2019-07-11', 0, 10101000000000, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Funcionario`
--

CREATE TABLE `Funcionario` (
  `id` int(11) NOT NULL,
  `cargo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `Funcionario`
--

INSERT INTO `Funcionario` (`id`, `cargo`) VALUES
(1, 'admin');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Livro`
--

CREATE TABLE `Livro` (
  `id` int(11) NOT NULL,
  `autor` varchar(50) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `ano` int(11) NOT NULL,
  `editora` varchar(50) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `disponivel` int(11) NOT NULL,
  `ativo` tinyint(1) DEFAULT NULL
) ;

--
-- Extraindo dados da tabela `Livro`
--

INSERT INTO `Livro` (`id`, `autor`, `titulo`, `ano`, `editora`, `codigo`, `quantidade`, `disponivel`, `ativo`) VALUES
(1, 'Euzinho', 'Os que não foram', 2019, 'Sravá', '1000', 100, 100, 1),
(2, 'jlksajdlk', 'sdjl', 1920, 'askdçls', '10920', 88, 88, 1),
(3, 'ddjflka', 'oiueiwuoq', 98, 'akjsd', '0219jl', 300, 300, 1),
(4, 'jlkjdask', 'wqelj', 9089, 'dsaoai', '0921ijk', 109, 109, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Reserva`
--

CREATE TABLE `Reserva` (
  `id` int(11) NOT NULL,
  `data_reserva` date NOT NULL,
  `data_retirada` date NOT NULL,
  `ativo` tinyint(1) DEFAULT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL
) ;

--
-- Extraindo dados da tabela `Reserva`
--

INSERT INTO `Reserva` (`id`, `data_reserva`, `data_retirada`, `ativo`, `id_cliente`, `id_livro`) VALUES
(1, '2019-07-11', '2019-07-18', 1, 4, 1),
(2, '2019-07-11', '2019-07-18', 1, 4, 1),
(3, '2019-07-11', '2019-07-18', 1, 4, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Usuario`
--

CREATE TABLE `Usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `ativo` tinyint(1) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL
) ;

--
-- Extraindo dados da tabela `Usuario`
--

INSERT INTO `Usuario` (`id`, `nome`, `login`, `senha`, `email`, `ativo`, `tipo`) VALUES
(1, 'admin', 'admin', 'admin', 'admin', 1, 'Funcionario'),
(3, 'gfds', 'mama', 'mama', 'dsfgfdssdfadmin', 1, 'Cliente'),
(4, 'msdfgf', 'mau', 'maumau', 'admin32421', 1, 'Cliente');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `alembic_version`
--
ALTER TABLE `alembic_version`
  ADD PRIMARY KEY (`version_num`);

--
-- Índices para tabela `Aluga`
--
ALTER TABLE `Aluga`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_funcionario` (`id_funcionario`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_livro` (`id_livro`);

--
-- Índices para tabela `Cliente`
--
ALTER TABLE `Cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cpf` (`cpf`);

--
-- Índices para tabela `Conta`
--
ALTER TABLE `Conta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_aluga` (`id_aluga`);

--
-- Índices para tabela `Funcionario`
--
ALTER TABLE `Funcionario`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `Livro`
--
ALTER TABLE `Livro`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- Índices para tabela `Reserva`
--
ALTER TABLE `Reserva`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_livro` (`id_livro`);

--
-- Índices para tabela `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `Aluga`
--
ALTER TABLE `Aluga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Conta`
--
ALTER TABLE `Conta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Livro`
--
ALTER TABLE `Livro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Reserva`
--
ALTER TABLE `Reserva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `Aluga`
--
ALTER TABLE `Aluga`
  ADD CONSTRAINT `Aluga_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario` (`id`),
  ADD CONSTRAINT `Aluga_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id`),
  ADD CONSTRAINT `Aluga_ibfk_3` FOREIGN KEY (`id_livro`) REFERENCES `Livro` (`id`);

--
-- Limitadores para a tabela `Cliente`
--
ALTER TABLE `Cliente`
  ADD CONSTRAINT `Cliente_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Usuario` (`id`);

--
-- Limitadores para a tabela `Conta`
--
ALTER TABLE `Conta`
  ADD CONSTRAINT `Conta_ibfk_1` FOREIGN KEY (`id_aluga`) REFERENCES `Aluga` (`id`);

--
-- Limitadores para a tabela `Funcionario`
--
ALTER TABLE `Funcionario`
  ADD CONSTRAINT `Funcionario_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Usuario` (`id`);

--
-- Limitadores para a tabela `Reserva`
--
ALTER TABLE `Reserva`
  ADD CONSTRAINT `Reserva_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id`),
  ADD CONSTRAINT `Reserva_ibfk_2` FOREIGN KEY (`id_livro`) REFERENCES `Livro` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
