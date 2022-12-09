<?php
require_once "../index.php";

if($_POST["filmID"] && $_POST["userId"] && $_POST["rating"]){
    try {
            $pelicula = $_POST["filmID"];
            $usuario = $_POST["userId"];
            $rating = $_POST["rating"];
        if($_POST["comment"]){
            $comentario = $_POST["comment"];
        }
        

    // el usuario ya hizo comentario en esta pelicula??
    $cuenta = $conexion->query("SELECT COUNT(userId) FROM users_reviews JOIN reviews ON reviewId=id WHERE userId = '$usuario' AND filmID='$pelicula'")->fetchColumn();

    if($cuenta){
      // {id: --}
        $idReview = $conexion->query("SELECT id FROM reviews JOIN users_reviews ON id=reviewId JOIN users ON userId=email WHERE userId = '$usuario' AND filmID='$pelicula'")->fetch(PDO::FETCH_OBJ);
        $idReview = (int) $idReview->id;
        echo var_dump($idReview) ;
        $conexion->query("UPDATE reviews SET comment='$comentario', rating='$rating' WHERE id='$idReview'");
        echo "Se actualizo la review de $usuario";
    }else{
        $review = $conexion->query("INSERT INTO reviews (filmID,comment,rating) VALUES ($pelicula,'$comentario',$rating)");
        $reviewId = $conexion->lastInsertId();
        $conexion->query("INSERT INTO users_reviews VALUES ('$usuario',$reviewId)");
        echo "Se creo la review y se le asigno al usuario $usuario";
    }

    } catch (\Throwable $th) {
        throw $th;
    }
}else{
    echo "Pasar los datos pedidos";
}