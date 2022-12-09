<?php
require_once "../index.php";

if(isset($_POST["email"]) && isset($_POST["password"])){
    try {
        $email = $_POST["email"];
        $password = $_POST["password"];

        $existe = $conexion->query("SELECT * FROM users WHERE email = '$email'")->fetch(PDO::FETCH_OBJ);
        if($existe){
            // verifico que la contraseña coincida con la contraseña guardada en base de datos
            if(password_verify($password,$existe->password)){
                echo "OK";
            }else{
                echo "";
            }
            
        }else{
            echo "";
        }
    } catch (\Throwable $th) {
        throw $th->getMessage();
    }
}else{
    echo "Pasar todos los datos pedidos";
}