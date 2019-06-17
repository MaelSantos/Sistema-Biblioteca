-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 17/06/2019 às 04:39
-- Versão do servidor: 10.1.38-MariaDB
-- Versão do PHP: 7.3.4

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
-- Estrutura para tabela `Aluga`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Aluga`
--

INSERT INTO `Aluga` (`id`, `data_locacao`, `data_devolucao`, `data_devolvido`, `diaria`, `ativo`, `id_funcionario`, `id_cliente`, `id_livro`) VALUES
(1, '2019-06-13', '2019-06-20', NULL, 10, 1, 2, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Cliente`
--

CREATE TABLE `Cliente` (
  `id` int(11) NOT NULL,
  `cpf` varchar(50) NOT NULL,
  `telefone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Cliente`
--

INSERT INTO `Cliente` (`id`, `cpf`, `telefone`) VALUES
(1, '075.510.743-84', '+5588981169372');

-- --------------------------------------------------------

--
-- Estrutura para tabela `Conta`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Conta`
--

INSERT INTO `Conta` (`id`, `data_efetuada`, `data_pagamento`, `data_paga`, `multa`, `valor_total`, `ativo`, `id_aluga`) VALUES
(1, '2019-06-13', '2019-06-20', NULL, 0, 70, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Funcionario`
--

CREATE TABLE `Funcionario` (
  `id` int(11) NOT NULL,
  `cargo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Funcionario`
--

INSERT INTO `Funcionario` (`id`, `cargo`) VALUES
(2, 'admin'),
(3, 'Atendente');

-- --------------------------------------------------------

--
-- Estrutura para tabela `Livro`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Livro`
--

INSERT INTO `Livro` (`id`, `autor`, `titulo`, `ano`, `editora`, `codigo`, `quantidade`, `disponivel`, `ativo`) VALUES
(1, 'Teste', 'Teste', 2019, 'Teste', '000-9', 100, 100, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Reserva`
--

CREATE TABLE `Reserva` (
  `id` int(11) NOT NULL,
  `data_reserva` date NOT NULL,
  `data_retirada` date NOT NULL,
  `ativo` tinyint(1) DEFAULT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_livro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Reserva`
--

INSERT INTO `Reserva` (`id`, `data_reserva`, `data_retirada`, `ativo`, `id_cliente`, `id_livro`) VALUES
(2, '2019-06-15', '2019-06-22', 1, 1, 1),
(3, '2019-06-16', '2019-06-23', 0, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Usuario`
--

CREATE TABLE `Usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `ativo` tinyint(1) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Usuario`
--

INSERT INTO `Usuario` (`id`, `nome`, `login`, `senha`, `email`, `ativo`, `tipo`) VALUES
(1, 'Abimael Jonas Furtuoso dos Santos', 'mael', 'mael', 'mael', 1, 'Cliente'),
(2, 'admin', 'admin', 'admin', 'admin', 1, 'Funcionario'),
(3, 'Teste', 'Teste', 'teste', 'Teste', 1, 'Funcionario');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `Aluga`
--
ALTER TABLE `Aluga`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_funcionario` (`id_funcionario`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_livro` (`id_livro`);

--
-- Índices de tabela `Cliente`
--
ALTER TABLE `Cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cpf` (`cpf`);

--
-- Índices de tabela `Conta`
--
ALTER TABLE `Conta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_aluga` (`id_aluga`);

--
-- Índices de tabela `Funcionario`
--
ALTER TABLE `Funcionario`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Livro`
--
ALTER TABLE `Livro`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- Índices de tabela `Reserva`
--
ALTER TABLE `Reserva`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_livro` (`id_livro`);

--
-- Índices de tabela `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `Aluga`
--
ALTER TABLE `Aluga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `Conta`
--
ALTER TABLE `Conta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `Livro`
--
ALTER TABLE `Livro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `Reserva`
--
ALTER TABLE `Reserva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `Aluga`
--
ALTER TABLE `Aluga`
  ADD CONSTRAINT `Aluga_ibfk_1` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario` (`id`),
  ADD CONSTRAINT `Aluga_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id`),
  ADD CONSTRAINT `Aluga_ibfk_3` FOREIGN KEY (`id_livro`) REFERENCES `Livro` (`id`);

--
-- Restrições para tabelas `Cliente`
--
ALTER TABLE `Cliente`
  ADD CONSTRAINT `Cliente_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Usuario` (`id`);

--
-- Restrições para tabelas `Conta`
--
ALTER TABLE `Conta`
  ADD CONSTRAINT `Conta_ibfk_1` FOREIGN KEY (`id_aluga`) REFERENCES `Aluga` (`id`);

--
-- Restrições para tabelas `Funcionario`
--
ALTER TABLE `Funcionario`
  ADD CONSTRAINT `Funcionario_ibfk_1` FOREIGN KEY (`id`) REFERENCES `Usuario` (`id`);

--
-- Restrições para tabelas `Reserva`
--
ALTER TABLE `Reserva`
  ADD CONSTRAINT `Reserva_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id`),
  ADD CONSTRAINT `Reserva_ibfk_2` FOREIGN KEY (`id_livro`) REFERENCES `Livro` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
