import React, { useState } from "react";
import Login from "./login";
import SingIn from "./signIn";


export default function Modal({close}){
    var [signIn,setSignIn] = useState(false)
    return (
        <>
            <div className="modal_background hover" onClick={() => close(false)}></div>   
            <div className="modal_container">
                {
                    signIn? <SingIn setSignIn={setSignIn}/> : <Login setSignIn={setSignIn}/>
                }
            </div>
        </>
    )
}