import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


export default function Reviews({user,rating,comment}){
    return (
        <div className="reviews_container">
            <h3>{user}</h3>
            {
                [1,2,3,4,5].map(e => {
                    if(e <= Number(rating)){
                        return <FontAwesomeIcon key={e} icon={faStar} className="icon icon-color"></FontAwesomeIcon>   
                    }
                    return <FontAwesomeIcon key={e} icon={faStar} className="icon"></FontAwesomeIcon>
                })
            }
            <p>{comment}</p>
        </div>
    )
}