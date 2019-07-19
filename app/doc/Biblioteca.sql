-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 19-Jul-2019 às 16:06
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
(1, '000000', '98237080921');

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
(2, 'admin');

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

-- --------------------------------------------------------

--
-- Estrutura da tabela `Usuario`
--

CREATE TABLE `Usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `ativo` tinyint(1) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL
) ;

--
-- Extraindo dados da tabela `Usuario`
--

INSERT INTO `Usuario` (`id`, `nome`, `login`, `senha`, `email`, `ativo`, `tipo`) VALUES
(1, 'wil', 'wil', '$2b$08$4ZplVPH5gYh5bDCH3pvIWe2K83LhEBQ6V2inUoDWUkj0zix9RIC9y', 'wil@gmail.com', 1, 'Cliente'),
(2, 'admin', 'admin', '$2b$08$4ZplVPH5gYh5bDCH3pvIWeXR1PFpm7p4wOIZML0jCG57k2ppy712G', 'admin', 1, 'Funcionario');

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
