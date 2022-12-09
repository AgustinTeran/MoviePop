<?php
require_once "../index.php";


if(isset($_GET["userId"])){
    try {
        $user = $_GET["userId"];
        $favorites = $conexion->query("SELECT * FROM films JOIN favorites ON id = filmID WHERE userId = '$user'")->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($favorites);
    } catch (\Throwable $th) {
        throw $th;
    }
   
}else{
    echo "Pasar todos los datos pedidos";
}