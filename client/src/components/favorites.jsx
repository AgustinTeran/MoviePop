import React from "react";
import { useSelector} from "react-redux"
import Card from "./filmCard";



export default function Favorites(){
    var {favorites} = useSelector(state => state)
    
    return (
        <div>
            
            <div className="search_filmsContainer">
                {
                    !favorites? (
                        <h1>Cargando...</h1>
                    ) : favorites.length? (
                        favorites.map(e => <Card key={e.id} name={e.name} image={e.image} id={e.id}/>)
                    ) : (
                        <div>
                            No tienes fav
                        </div>
                    )
                }
            </div>
        </div>
    )
}