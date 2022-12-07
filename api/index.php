<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


// seria como un server.use(express.json()) para los metodos post
$_POST = json_decode(file_get_contents("php://input"),true);



// CONEXION A DB
$conexion = new PDO("mysql:host=localhost;dbname=sitensotest","root","");