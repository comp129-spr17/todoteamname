-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 16, 2017 at 10:20 PM
-- Server version: 5.5.54
-- PHP Version: 5.6.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `PLAYERDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Players`
--

CREATE TABLE IF NOT EXISTS `Players` (
  `UID` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `Name` varchar(17) NOT NULL,
  `Info` text,
  `Server` varchar(2) NOT NULL,
  `Platform` varchar(4) NOT NULL,
  `GroupSize` int(11) NOT NULL,
  `Language` varchar(20) NOT NULL,
  `SeasonRank` int(11) NOT NULL,
  `HasMicrophone` tinyint(1) NOT NULL,
  `Role` varchar(7) NOT NULL,
  `IsMature` tinyint(1) NOT NULL,
  `Level` int(11) NOT NULL,
  `IsCompetitive` tinyint(1) NOT NULL,
  `creationTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`UID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=45 ;

--
-- Dumping data for table `Players`
--

INSERT INTO `Players` (`UID`, `Name`, `Info`, `Server`, `Platform`, `GroupSize`, `Language`, `SeasonRank`, `HasMicrophone`, `Role`, `IsMature`, `Level`, `IsCompetitive`, `creationTime`) VALUES
(0000000021, 'okaythere', 'look at this net', 'go', 'PC', 3, 'english', 1239, 1, 'Defense', 0, 1234, 0, '2017-03-09 21:37:25'),
(0000000022, 'look', '', 'li', 'PS4', 4, 'up', 1234, 1, 'Tank', 0, 2345, 0, '2017-03-09 21:38:06'),
(0000000023, 'at', '', 'se', 'PC', 2, 'english', 1234, 1, 'Defense', 0, 1344, 0, '2017-03-09 21:38:24'),
(0000000024, 'this', '', 'se', 'XBOX', 3, 'french', 1234, 1, 'Offense', 0, 4746, 0, '2017-03-09 21:38:45'),
(0000000025, 'net', '', 'se', 'PS4', 2, 'polish', 1234, 0, 'Defense', 0, 4333, 0, '2017-03-09 21:39:16'),
(0000000026, 'that', '', 'na', 'PS4', 3, 'spanish', 800, 0, 'Offense', 0, 832, 0, '2017-03-09 21:44:11'),
(0000000027, 'i', '', 'ww', 'XBOX', 6, 'english', 332, 0, 'Support', 0, 443, 0, '2017-03-09 21:44:45'),
(0000000028, 'just', '', 'de', 'XBOX', 4, 'english', 1234, 1, 'Defense', 0, 1234, 0, '2017-03-09 21:45:16'),
(0000000029, 'found', '', 'as', 'PS4', 5, 'english', 5666, 1, 'Offense', 0, 5444, 0, '2017-03-09 21:45:39'),
(0000000030, '23asdf', '', 'as', 'PS4', 4, 'af', 234, 1, 'Tank', 1, 231, 1, '2017-03-09 22:56:40'),
(0000000031, 'å¼ å˜‰å…´', '', 'US', 'PC', 2, 'English', 2000, 1, 'Tank', 1, 200, 1, '2017-03-12 23:42:19'),
(0000000032, 'zjxpirate', '', 'EU', 'PC', 2, 'English', 2000, 1, 'Support', 1, 2000, 1, '2017-03-12 23:43:08'),
(0000000033, 'ï¼ˆâ€˜â€”â€”â€™ï¼', '', 'As', 'PC', 2, 'Chinese', 2500, 1, 'Defense', 1, 2500, 1, '2017-03-12 23:44:30'),
(0000000034, 'sjcdh', '', 'US', 'PC', 2, 'English', 2000, 1, 'Defense', 1, 2000, 1, '2017-03-12 23:50:04'),
(0000000035, 'zjxpirate', '', 'US', 'PC', 2, 'English', 2000, 1, 'Defense', 1, 2000, 1, '2017-03-12 23:51:04'),
(0000000036, 'Test', 'Hello world', 'NA', 'PS4', 2, 'English ', 400, 1, 'Tank', 1, 300, 1, '2017-03-13 00:27:25'),
(0000000037, 'test', 'hello world', 'NA', 'PS4', 3, 'English', 200, 1, 'Tank', 0, 200, 1, '2017-03-13 07:32:26'),
(0000000038, 'petmytauntaun', '', 'te', 'XBOX', 1, 'english', 0, 1, 'Offense', 1, 12, 1, '2017-03-13 07:44:59'),
(0000000039, 'test', 'test', 'NA', 'PC', 2, 'English', 200, 0, 'Tank', 1, 300, 1, '2017-03-13 07:50:42'),
(0000000040, 'test', 'test', 'NA', 'XBOX', 3, 'English', 200, 1, 'Support', 0, 200, 1, '2017-03-14 06:23:27'),
(0000000041, 'zjxpirate', '', 'US', 'PC', 2, 'Chinese', 2000, 1, 'Tank', 1, 2333, 1, '2017-03-16 18:19:27'),
(0000000042, 'zjxpirate', '', 'US', 'PC', 3, 'English', 2000, 1, 'Tank', 1, 2000, 1, '2017-03-16 18:20:32'),
(0000000043, 'test', 'test', 'NA', 'PC', 2, 'English', 200, 1, 'Tank', 0, 300, 1, '2017-03-16 20:16:59'),
(0000000044, 'test', 'hello', 'NA', 'XBOX', 3, 'English', 150, 1, 'Tank', 1, 300, 1, '2017-03-16 20:19:46');

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`localhost` EVENT `DeleteExpired` ON SCHEDULE EVERY 10 MINUTE STARTS '2017-02-28 00:22:15' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM Players WHERE NOW() > (creationTime + INTERVAL 10 MINUTE)$$

DELIMITER ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
