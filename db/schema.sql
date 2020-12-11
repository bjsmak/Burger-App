CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burgerName VARCHAR(45) NOT NULL,
    devoured boolean
)