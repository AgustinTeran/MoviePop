<?php
require_once "../index.php";


if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["password"])){
    try {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
    
        $password = password_hash("$password",PASSWORD_BCRYPT);
        $conexion->query("INSERT INTO users VALUES ( '$name', '$email', '$password')");

        echo "Se creo";
    } catch (\Throwable $th) {
        throw $th->getMessage();
    }
    
}else{
    echo "Pasar todos los datos pedidos";
}