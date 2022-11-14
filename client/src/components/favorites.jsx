import React from "react";
import { useSelector} from "react-redux"
import Card from "./filmCard";



export default function Favorites(){
    var {favorites} = useSelector(state => state)
    
    return (
        <>
            
            <div className="search_filmsContainer">
                {
                    !favorites? (
                        <h1>Cargando...</h1>
                    ) : favorites.length? (
                        favorites.map(e => <Card key={e.id} name={e.name} image={e.image} id={e.id}/>)
                    ) : (
                        <div style={{height:"100%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
                            <h1 style={{marginTop:"50px"}}>No tienes peliculas en favoritos</h1>
                        </div>
                    )
                }
            </div>
        </>
    )
}