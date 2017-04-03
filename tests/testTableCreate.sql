-- Create database
CREATE DATABASE IF NOT EXISTS PLAYERDB;
USE PLAYERDB;

-- Clear existing table
DROP TABLE IF EXISTS testData;

-- Create testData table
CREATE TABLE testData
(
UID 					INTEGER			ZEROFILL PRIMARY KEY AUTO_INCREMENT,
Name					VARCHAR(17)		NOT NULL,
Info					TEXT					,
Server					VARCHAR(2)		NOT NULL,
Platform				VARCHAR(4)		NOT NULL,
GroupSize				INTEGER			NOT NULL,
Language				VARCHAR(20)		NOT NULL,
SeasonRank 				INTEGER			NOT NULL,
HasMicrophone 			BOOLEAN			NOT NULL,
Role 					VARCHAR(7)		NOT NULL,
IsMature 				BOOLEAN			NOT NULL,
Level 					INTEGER			NOT NULL,
IsCompetitive 			BOOLEAN			NOT NULL,
creationTime			TIMESTAMP		
);
