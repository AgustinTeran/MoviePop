<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


// seria como un server.use(express.json()) para los metodos post
$_POST = json_decode(file_get_contents("php://input"),true);


// CONEXION A DB
$conexion = new PDO("mysql:host=localhost;dbname=sitensotest","root","");



// CREACION DE TABLAS
try {
    $conexion->query("CREATE TABLE IF NOT EXISTS users (
        name VARCHAR(255),
        email VARCHAR(255) PRIMARY KEY,
        password VARCHAR(255)
    )");
    
    $conexion->query("CREATE TABLE IF NOT EXISTS reviews (
        id  INT AUTO_INCREMENT PRIMARY KEY,
        filmID INT,
        comment TEXT,
        rating INT
    )");
    
    $conexion->query("CREATE TABLE IF NOT EXISTS films (
        id  INT PRIMARY KEY,
        image TEXT,
        name VARCHAR(255)
    )");
    
    $conexion->query("CREATE TABLE IF NOT EXISTS favorites (
        userId VARCHAR(255) REFERENCES users (email),
        filmID INT REFERENCES films (id)
    )");

    $conexion->query("CREATE TABLE IF NOT EXISTS users_reviews (
        userId VARCHAR(255) REFERENCES users (email),
        reviewId INT REFERENCES reviews (id)
    )");
} catch (\Throwable $th) {
    throw $th;
}