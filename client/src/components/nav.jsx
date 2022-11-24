import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faArrowUpFromBracket, faArrowUpRightFromSquare, faHeart, faHouseChimney , faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { GetFavorites } from "../redux/actiones";

export default function Nav(){
    var {logged,favorites} = useSelector(state => state)
    var [openLogin, setOpenLogin] = useState(false)

    var dispatch = useDispatch()

    useEffect(() => {
        if(logged) dispatch(GetFavorites(localStorage.user))
    },[favorites,logged])

    // useEffect(() => {
    //      if(logged) dispatch(GetFavorites(localStorage.user))
    // },[])
    return (
        <nav className="nav_container">
            {
                logged? (
                    <div>
                        <FontAwesomeIcon className="hover icon" icon={faArrowRightFromBracket}
                         onClick={() => {
                            localStorage.user = ""
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