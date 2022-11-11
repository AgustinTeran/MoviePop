import React from "react";
import Logo from "../assets/Logo.png"


export default function Home(){
    return (
        <div className="home_container">
           <img src={Logo} alt="Logo2" />
           <h1>MoviePop!</h1>
        </div>
    )
}