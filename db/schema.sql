DROP DATABASE IF EXISTS Positions;

CREATE DATABASE Positions;

USE Positions;

CREATE TABLE Workers(
    position_id INT(1) AUTO_INCREMENT PRIMARY KEY NOT NULL, 
    title VARCHAR(100),
    department_id INT(0),
    descr VARCHAR(255),
    salary INT(0)
);
