import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClearFilms, Films, Searching } from "../redux/actiones";
import Card from "./filmCard";

export default function Search(){
    var {films} = useSelector(state => state)
    var dispatch = useDispatch()
    var [state,setState] = useState("")

    useEffect(() => {
        if(!films.length) dispatch(Films("star wars"))
    },[films])


    return (
        <div className="search_container">
            <input type="text" placeholder="Buscar" value={state} onChange={(e) => {setState(e.target.value);dispatch(Films(e.target.value))}}/>

            <h3>Peliculas</h3>
            <hr style={{width:"90%"}}/>
            {
                !films.length? 
                <h1>Cargando...</h1> :
                <div className="search_filmsContainer">
                    {
                        films.map(f => <Card key={f.show.id} id={f.show.id} name={f.show.name} image={f.show.image?.original}/>)
                    }
                </div> 
            }
        </div>
    )
}