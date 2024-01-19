-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Jan 2024 pada 07.16
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data_pegawai_hrd`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `employees`
--

CREATE TABLE `employees` (
  `id` int(20) NOT NULL,
  `nama` varchar(50) DEFAULT NULL,
  `jk` char(10) DEFAULT NULL,
  `phone` int(15) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `tgl_masuk` date DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `employees`
--

INSERT INTO `employees` (`id`, `nama`, `jk`, `phone`, `alamat`, `email`, `status`, `tgl_masuk`, `timestamp`) VALUES
(1, 'Siti Nurhalizah', 'Perempuan', 897668856, 'Kp. Jati jajar rt02/08, kec.jampang', 'siti123@gmail.com', 'active', '2020-01-15', '2024-01-19 04:46:58'),
(2, 'Maymunah', 'Perempuan', 81220385, 'Kp.Bandar papanjaran, kab.bandung', 'maymunhhhh@gmail.com', 'active', '2020-01-20', '2024-01-19 04:47:46'),
(5, 'salman', 'Laki-laki', 812203890, 'Kp.panjang papanjaran, kab.cirebon', 'salman@gmail.com', 'inactive', '2021-03-25', '2024-01-19 04:47:46'),
(6, 'salma', 'Perempuan', 81290876, 'Kp.banjar , banjar negara', 'salmah12@gmail.com', 'inactive', '2022-03-27', '2024-01-19 04:47:46'),
(8, 'Pramuja', 'Perempuan', 812887876, 'kp.salawa, riau', 'prmuja13@gmail.com', 'active', '2021-08-08', '2024-01-19 04:47:46'),
(9, 'Putra', 'Laki-laki', 882987876, 'banjarmasin, kalimantan', 'putra27@gmail.com', 'active', '2021-10-08', '2024-01-19 04:47:46');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
