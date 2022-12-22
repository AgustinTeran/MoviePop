import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faArrowUpFromBracket, faArrowUpRightFromSquare, faHeart, faHouseChimney , faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { GetFavorites, GetUser } from "../redux/actiones";

export default function Nav(){
    var {logged,user} = useSelector(state => state)
    var [openLogin, setOpenLogin] = useState(false)

    var dispatch = useDispatch()

    useEffect(() => {
        if(logged) {
            dispatch(GetUser())  
        }
    },[logged])

    useEffect(() => {
        if(user.name){
            dispatch(GetFavorites(user.email))
        }
    },[user])

    return (
        <nav className="nav_container">
            {
                logged? (
                    <div>
                        <FontAwesomeIcon className="hover icon" icon={faArrowRightFromBracket}
                         onClick={() => {
                            localStorage.removeItem("token")
                            window.location.replace("/")
                        }}></FontAwesomeIcon>
                    </div>
                ) : (
                    <div> 
                        <FontAwesomeIcon className="hover icon" icon={faArrowUpFromBracket} onClick={() => setOpenLogin(true)}></FontAwesomeIcon>
                        {
                        openLogin? <Modal close={setOpenLogin}/> : null
                        }
                    </div>
                )
            }
            
            <div>
                <NavLink exact to={"/"} className="icon">
                    <FontAwesomeIcon icon={faHouseChimney} ></FontAwesomeIcon>
                </NavLink>
                <NavLink to={"/search"} className="icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </NavLink>
                {
                    logged? (
                        <NavLink to={"/favorites"} className="icon">
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </NavLink>
                    ) : null
                }
            </div>
        </nav>
    )
}