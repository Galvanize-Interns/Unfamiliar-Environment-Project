DROP DATABASE IF EXISTS Employees;

CREATE DATABASE Employees;

USE Employees;

CREATE TABLE Workers( 
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    start_date VARCHAR(50),
    city VARCHAR(50),
    state VARCHAR(50),
    position_id INT(1) PRIMARY KEY NOT NULL,
);