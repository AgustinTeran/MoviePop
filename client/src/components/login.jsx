import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginController } from "../functions/controller";
import { Loguearse } from "../redux/actiones";


export default function Login({setSignIn}){
    var dispatch = useDispatch()
    var [state,setState] = useState({
        email:"",
        password:""
    })

    var [errors,setErrors] = useState({email:"",password:""})

    useEffect(() => {
        loginController(state,setErrors)
    },[state])

    function handleChange(e){
        setState({...state,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        if(!errors.email && !errors.password){
            dispatch(Loguearse(state))
            setState({
                email:"",
                password:""
            })
        }else{
            alert("Hay errores")
        } 
    }
    return (
        <div className="login_container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={state.email} name={"email"} onChange={e => handleChange(e)}/>
                        <span>{errors.email}</span>
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="text" value={state.password} name={"password"} onChange={e => handleChange(e)}/>
                        <span>{errors.password}</span>
                    </div>
                </div>
                <input type="submit" value={"Ingresar"} className="sub hover"/>
            </form>
            <div className="login_footer">
                <p>¿No tienes cuenta?</p>
                <button onClick={() => setSignIn(true)} className="hover">Registrate</button>
            </div>
        </div>
    )
}