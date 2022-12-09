<?php
require_once "../index.php";

if(isset($_GET["filmID"])){
    try {
        $pelicula = $_GET["filmID"];

        $reviews = $conexion->query("SELECT name, comment, rating FROM reviews JOIN users_reviews ON id=reviewId JOIN users ON userId=email WHERE filmID='$pelicula'")->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($reviews);
    } catch (\Throwable $th) {
        throw $th;
    }
}else{
    echo "Pasar id de la pelicula";
}