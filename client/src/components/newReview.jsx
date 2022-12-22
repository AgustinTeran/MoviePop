import { faPaperPlane, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useRef } from "react";
import {useDispatch, useSelector} from "react-redux"
import {CreateReviews, GetReviews} from "../redux/actiones"


export default function NewReview({filmID}){
    var [miPuntaje,setMiPuntaje] = useState("")
    var text = useRef()
    var dispatch = useDispatch()
    var {user} = useSelector(state => state)

    function handleSub(e){
        e.preventDefault()

        if(miPuntaje){
            dispatch(CreateReviews({
                filmID,
                userId: user.email,
                comment: text.current.value,
                rating: miPuntaje
            }))
            text.current.value = ""
        }else{
            alert("Tienes que calificar")
        }

    }
    return (
        <div className="newReview_container">
            <form onSubmit={handleSub}>
                <textarea ref={text} placeholder="Agregar comentario..."></textarea>
                <button type="submit" className="hover"><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></button>
            </form>
            <div>
                {
                    [1,2,3,4,5].map(e => {
                        if(e <= miPuntaje && miPuntaje){
                            return <FontAwesomeIcon key={e} className="icon-color hover" icon={faStar} onClick={() => setMiPuntaje(e)}></FontAwesomeIcon>
                        }
                        return (
                            <FontAwesomeIcon key={e} className="hover" icon={faStar} onClick={() => setMiPuntaje(e)}></FontAwesomeIcon>
                        )
                    })  
                }
            </div>
        </div>
    )
}