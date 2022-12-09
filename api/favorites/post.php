<?php
require_once "../index.php";

if(isset($_POST["filmId"]) && isset($_POST["image"]) && isset($_POST["name"]) && isset($_POST["userId"])){
    try {
        $usuario = $_POST["userId"];

    $id = $_POST["filmId"];
    $name = $_POST["name"];
    $image = $_POST["image"];

    $cuenta = $conexion->query("SELECT COUNT(id) FROM films WHERE id = '$id'")->fetchColumn();

    // si ya existe la pelicula simplemente se la agrego como favorito al usuario
    if($cuenta){
        $conexion->query("INSERT INTO favorites VALUES ('$usuario', '$id')");
        echo "OK";
    }else{
    // si no existe la pelicula la creo y despues se la asigno como favorito al usuario

        $conexion->query("INSERT INTO films VALUES ('$id','$image','$name')");
        $conexion->query("INSERT INTO favorites VALUES ('$usuario', '$id')");
        echo "OK";
    }
    } catch (\Throwable $th) {
        throw $th;
    }
    
}else{
    echo json_encode("Pasar todos los datos pedidos");
}