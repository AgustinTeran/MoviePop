<?php
require_once "../index.php";

if($_GET["filmId"] && $_GET["userId"]){
    $pelicula = $_GET["filmId"];
    $usuario = $_GET["userId"];

    try {
        $conexion->query("DELETE FROM favorites WHERE userId='$usuario' AND filmID='$pelicula'");
        echo "OK";
    } catch (\Throwable $th) {
        //throw $th;
        throw $th;
    }
    
}else{
    echo "Pasar datos pedidos";
}