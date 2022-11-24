import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Details, GetReviews } from "../redux/actiones";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar, faStarHalf, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import Reviews from "./review";
import NewReview from "./newReview";



export default function Detail(){
    var dispatch = useDispatch()
    var {detail,reviews,logged} = useSelector(state => state)
    var {id} = useParams()
    var history = useHistory()

    
    
    useEffect(() => {
        dispatch(Details(id))
        dispatch(GetReviews(id))
    },[])

    
    var puntaje =  detail.rating?.average / 2

    return (
        <div className="detail_container">
            <div className="goBack">
                <FontAwesomeIcon className="hover icon" onClick={() => history.goBack()} icon={faArrowLeft}></FontAwesomeIcon>
            </div>
            {
                detail.id != id? 
                <h1>Cargando...</h1> :
                <div className="details">
                    <div className="content">
                        <div className="img-puntaje">
                            <img src={detail.image?.original} style={{width:"90%"}} alt={detail.name} />
                            <div className="puntaje">
                                {
                                    puntaje?
                                [1,2,3,4,5].map(e => {
                                    if(e <= puntaje.toString().split(".")[0] || (e - 1 == puntaje.toString().split(".")[0] && puntaje.toString().split(".")[1][0] > 7)){
                                        return <FontAwesomeIcon className="icon icon-color" key={e} icon={faStar}></FontAwesomeIcon>
                                    }
                                    if(e - 1 == puntaje.toString().split(".")[0] && puntaje.toString().split(".")[1][0] >= 3){
                                        return <FontAwesomeIcon className="icon icon-color" key={e} icon={faStarHalfStroke}></FontAwesomeIcon>
                                    }
                                    return <FontAwesomeIcon className="icon" key={e} icon={faStar}></FontAwesomeIcon>
                                }) : null
                                }
                            </div>
                        </div>
                        <div className="text">
                            <h1>{detail.name}</h1>
                            <p>Lenguaje: {detail.language}</p>
                            {/* detail.genres.length = 3 */}
                            {/*    i=               0      1        2  */}
                            {/* detail.genres = [Action, Anime, Science-Fiction] */}
                            <p>Generos: {detail.genres.length? detail.genres.map((g,i) => {
                                if(i == detail.genres.length - 1 && detail.genres.length > 1){
                                return  ` y ${g}`
                                }
                                if(!i){
                                    return `${g}`
                                }
                                return `, ${g}`
                            }) : 
                            "sin generos"}</p>
                            <p>Fecha de estreno: {detail.premiered? detail.premiered : "Indefinida"}</p>
                            <h1>Sinopsis</h1>
                            <p>{detail.summary?.replace(/(<([^>]+)>)/ig, '')}</p>
                            {
                                reviews.length?  
                                    <div>
                                        <br />
                                        <h2>Comentarios</h2>
                                        <hr />
                                    </div> : null
                            }
                            {
                                reviews.length?  
                                    reviews.map((r,i) => <Reviews key={i} comment={r.comment} rating={r.rating} user={r.user}/>)
                                    : null
                                }
                            {
                                logged && 
                                <NewReview filmID={id}/>
                            }
                        </div>
                        
                    </div>
                    
                </div>
            }
        </div>
    )
}