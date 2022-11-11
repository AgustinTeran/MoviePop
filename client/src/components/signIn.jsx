import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginController } from "../functions/controller";
import { CreateUser } from "../redux/actiones";


export default function SingIn({setSignIn}){
    var dispatch = useDispatch()

    var [state,setState] = useState({
        name:"",
        email:"",
        password:""
    })

    var [errors,setErrors] = useState({name:"",email:"",password:""})

    useEffect(() => {
        loginController(state,setErrors)
    },[state])

    function handleChange(e){
        setState({...state,[e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        if(!errors.name && !errors.email && !errors.password){
            dispatch(CreateUser(state))
            setState({
                name:"",
                email:"",
                password:""
            })
        }else{
            alert("Hay errores")
        }    
    }
    return (
        <div className="login_container">
            <h1>Registrate</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Nombre</label>
                        <input type="text" value={state.name} name={"name"} onChange={handleChange}/>
                        <span>{errors.name}</span>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={state.email} name={"email"} onChange={handleChange}/>
                        <span>{errors.email}</span>
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="text" value={state.password} name={"password"} onChange={handleChange}/>
                        <span>{errors.password}</span>
                    </div>
                </div>
                <input type="submit" value={"Crear Cuenta"} className="sub hover"/>
            </form>
            <div className="login_footer">
                <p>¿Ya tienes cuenta?</p>
                <button onClick={() => setSignIn(false)} className="hover">Ingresar</button>
            </div>
        </div>
    )
}