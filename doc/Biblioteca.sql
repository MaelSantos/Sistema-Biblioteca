-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 26/05/2019 às 16:30
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
  `ativo` tinyint(1) NOT NULL,
  `id_funcionario` bigint(20) UNSIGNED NOT NULL,
  `id_cliente` bigint(20) UNSIGNED NOT NULL,
  `id_livro` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `senha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Cliente`
--

INSERT INTO `Cliente` (`id`, `nome`, `cpf`, `email`, `telefone`, `login`, `senha`) VALUES
(1, 'mael', '000', '000', 'mael@gmail', 'mael7', 'b6156a2d23aef0f07ef8e2337558f372'),
(4, 'Mael Santos', '075.510.743-84', '(88)9 8116-9372', 'maelsantos777@gmail.', 'mael_santos7', 'f500a7bad9dbb88e08e565df38e2ea48'),
(5, 'Santos', '123123123', 'dsfafa@gmail.com', '92138091', 'kjdal', '81dc9bdb52d04dc20036dbd8313ed055'),
(6, 'asklkdask', '2121312', 'akdjdjk@gmail.com', '210939129', 'mama', '81dc9bdb52d04dc20036dbd8313ed055'),
(7, 'wilson', '0913980', 'admin', 'admin', 'admin', '21232f297a57a5a743894a0e4a801fc3'),
(8, 'Teste', 'Teste', 'Teste', 'Teste', 'Teste', '8e6f6f815b50f474cf0dc22d4f400725');

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
  `senha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Funcionario`
--

INSERT INTO `Funcionario` (`id`, `nome`, `cargo`, `email`, `login`, `senha`) VALUES
(1, 'Abimael Santos', 'Chefe', 'abi@gmail.com', 'chefef', '25d55ad283aa400af464c76d713c07ad'),
(2, 'Teste', 'Teste', 'Teste', 'Teste', '8e6f6f815b50f474cf0dc22d4f400725');

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
  `disponivel` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `Livro`
--

INSERT INTO `Livro` (`id`, `autor`, `titulo`, `ano`, `editora`, `codigo`, `quantidade`, `disponivel`) VALUES
(1, 'Ninguem Importante', 'Os que nÃ£o foram', 2019, 'Sei la bixo', '9990-p', 100, 100),
(2, 'Teste', 'Teste', 2019, 'Teste', 'Teste', 200, 200);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Reserva`
--

CREATE TABLE `Reserva` (
  `id` int(11) NOT NULL,
  `data_reserva` date NOT NULL,
  `data_retirada` date NOT NULL,
  `ativo` tinyint(1) NOT NULL,
  `id_cliente` bigint(20) UNSIGNED NOT NULL,
  `id_livro` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Reserva`
--

INSERT INTO `Reserva` (`id`, `data_reserva`, `data_retirada`, `ativo`, `id_cliente`, `id_livro`) VALUES
(0, '0000-00-00', '0000-00-00', 1, 7, 2);

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
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_livro` (`id_livro`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `Aluga`
--
ALTER TABLE `Aluga`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `Cliente`
--
ALTER TABLE `Cliente`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `Funcionario`
--
ALTER TABLE `Funcionario`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `Livro`
--
ALTER TABLE `Livro`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
-- Restrições para tabelas `Reserva`
--
ALTER TABLE `Reserva`
  ADD CONSTRAINT `Reserva_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id`),
  ADD CONSTRAINT `Reserva_ibfk_2` FOREIGN KEY (`id_livro`) REFERENCES `Livro` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
