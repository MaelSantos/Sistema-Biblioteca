-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 06/06/2019 às 20:19
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
  `id` bigint(20) UNSIGNED NOT NULL,
  `data_locacao` date NOT NULL,
  `data_devolucao` date NOT NULL,
  `data_devolvido` date DEFAULT NULL,
  `diaria` float NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  `id_funcionario` bigint(20) UNSIGNED NOT NULL,
  `id_cliente` bigint(20) UNSIGNED NOT NULL,
  `id_livro` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Aluga`
--

INSERT INTO `Aluga` (`id`, `data_locacao`, `data_devolucao`, `data_devolvido`, `diaria`, `ativo`, `id_funcionario`, `id_cliente`, `id_livro`) VALUES
(1, '2019-05-26', '2019-06-02', '2019-05-30', 10, 1, 1, 4, 1),
(2, '2019-05-26', '2019-06-02', '2019-05-30', 10, 1, 2, 7, 2),
(5, '2019-05-26', '2019-06-02', '2019-05-30', 10, 1, 2, 9, 2),
(6, '2019-05-26', '2019-06-02', NULL, 10, 1, 2, 8, 2),
(7, '2019-06-06', '2019-06-13', NULL, 10, 1, 2, 7, 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Cliente`
--

CREATE TABLE `Cliente` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `login` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `ativo` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Cliente`
--

INSERT INTO `Cliente` (`id`, `nome`, `cpf`, `email`, `telefone`, `login`, `senha`, `ativo`) VALUES
(1, 'mael', '000', '000', 'mael@gmail', 'mael7', 'b6156a2d23aef0f07ef8e2337558f372', 1),
(4, 'Mael Santos', '075.510.743-84', '(88)9 8116-9372', 'maelsantos777@gmail.', 'mael_santos7', 'f500a7bad9dbb88e08e565df38e2ea48', 1),
(5, 'Santos', '123123123', 'dsfafa@gmail.com', '92138091', 'kjdal', '81dc9bdb52d04dc20036dbd8313ed055', 1),
(7, 'wilson', '0913980', 'wil@gmail.com', '91028912089', 'wil', '8c92cf3d8c3ad6ebb59eba7dbf1bd4cd', 1),
(8, 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', '8e6f6f815b50f474cf0dc22d4f400725', 1),
(9, 'Rogerin', '13083092', 'Rogerin@gmail.com', '201830982', 'Rogerin', '3933afd7d0083630224060916ec7d879', 1),
(10, 'Pamella Ribeiro dos Reis', '013480948', 'pam@gmail.com', '20198309', 'pam', '91c0f7100bde719c44790e7df757a1a6', 1),
(11, 'Marminino', '12421894', 'mami@gmail.com', '0918939', 'mami', 'fed8f5d6744128839ed7390f84268a78', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Conta`
--

CREATE TABLE `Conta` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `data_efetuada` date NOT NULL,
  `data_pagamento` date DEFAULT NULL,
  `data_paga` date DEFAULT NULL,
  `multa` float DEFAULT NULL,
  `valor_total` float DEFAULT NULL,
  `id_aluga` bigint(20) UNSIGNED NOT NULL,
  `ativo` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Conta`
--

INSERT INTO `Conta` (`id`, `data_efetuada`, `data_pagamento`, `data_paga`, `multa`, `valor_total`, `id_aluga`, `ativo`) VALUES
(1, '0000-00-00', NULL, NULL, 0, 300, 1, NULL),
(2, '2019-05-26', NULL, NULL, 0, 70, 6, NULL),
(3, '2019-06-06', NULL, NULL, 0, 70, 7, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Funcionario`
--

CREATE TABLE `Funcionario` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cargo` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `ativo` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Funcionario`
--

INSERT INTO `Funcionario` (`id`, `nome`, `cargo`, `email`, `login`, `senha`, `ativo`) VALUES
(1, 'Abimael Santos', 'Chefe', 'abi@gmail.com', 'chefef', '25d55ad283aa400af464c76d713c07ad', 1),
(2, 'admin', 'Administrador', 'admin', 'admin', '21232f297a57a5a743894a0e4a801fc3', 1),
(3, 'Novin Ferreira Sousa', 'Capaxo', 'novin@gmail.com', 'novin', '4bb84f5c2a2307594b8b21e3fa1948f0', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Livro`
--

CREATE TABLE `Livro` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `autor` varchar(50) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `ano` int(11) NOT NULL,
  `editora` varchar(50) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `quantidade` int(11) NOT NULL,
  `disponivel` int(11) NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Livro`
--

INSERT INTO `Livro` (`id`, `autor`, `titulo`, `ano`, `editora`, `codigo`, `quantidade`, `disponivel`, `ativo`) VALUES
(1, 'Ninguem Importante', 'Os que não foram', 2019, 'Sei la bixoo', '9990-p', 100, 100, 1),
(2, 'Rara', 'Madalena', 2019, 'Bom livro', '8889-k', 433, 433, 1),
(3, 'Sei la', 'Historias não contadas', 2019, 'Na mão', '8882-00', 300, 300, 1),
(4, 'já morreu', 'Romance de ninguem', 1888, 'Acabada', '0006', 700, 700, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Reserva`
--

CREATE TABLE `Reserva` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `data_reserva` date NOT NULL,
  `data_retirada` date NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  `id_cliente` bigint(20) UNSIGNED NOT NULL,
  `id_livro` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Reserva`
--

INSERT INTO `Reserva` (`id`, `data_reserva`, `data_retirada`, `ativo`, `id_cliente`, `id_livro`) VALUES
(1, '2019-05-26', '2019-06-02', 1, 7, 1),
(2, '2019-05-26', '2019-06-02', 1, 7, 1),
(3, '2019-05-26', '2019-06-02', 1, 7, 1),
(4, '2019-05-26', '2019-06-02', 0, 7, 1),
(5, '2019-05-30', '2019-06-06', 0, 10, 1),
(6, '2019-05-30', '2019-06-06', 0, 10, 1),
(7, '2019-05-30', '2019-06-06', 0, 10, 2),
(8, '2019-05-30', '2019-06-06', 1, 7, 1),
(9, '2019-06-06', '2019-06-13', 1, 7, 2);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `Aluga`
--
ALTER TABLE `Aluga`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_funcionario` (`id_funcionario`),
  ADD KEY `id_livro` (`id_livro`);

--
-- Índices de tabela `Cliente`
--
ALTER TABLE `Cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `cpf` (`cpf`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `telefone` (`telefone`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Índices de tabela `Conta`
--
ALTER TABLE `Conta`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_aluga` (`id_aluga`);

--
-- Índices de tabela `Funcionario`
--
ALTER TABLE `Funcionario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Índices de tabela `Livro`
--
ALTER TABLE `Livro`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- Índices de tabela `Reserva`
--
ALTER TABLE `Reserva`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_livro` (`id_livro`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `Aluga`
--
ALTER TABLE `Aluga`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `Cliente`
--
ALTER TABLE `Cliente`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `Conta`
--
ALTER TABLE `Conta`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `Funcionario`
--
ALTER TABLE `Funcionario`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `Livro`
--
ALTER TABLE `Livro`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `Reserva`
--
ALTER TABLE `Reserva`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `Aluga`
--
ALTER TABLE `Aluga`
  ADD CONSTRAINT `Aluga_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id`),
  ADD CONSTRAINT `Aluga_ibfk_2` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario` (`id`),
  ADD CONSTRAINT `Aluga_ibfk_3` FOREIGN KEY (`id_livro`) REFERENCES `Livro` (`id`);

--
-- Restrições para tabelas `Conta`
--
ALTER TABLE `Conta`
  ADD CONSTRAINT `Conta_ibfk_1` FOREIGN KEY (`id_aluga`) REFERENCES `Aluga` (`id`);

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
