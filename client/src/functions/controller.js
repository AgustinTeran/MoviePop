export function loginController(state,setErrors){
    // Es el formulario de creacion o de registro

    // Formulario de creacion
    if(state.name == "" || state.name){
        // Control de name
        if(!state.name){
            setErrors(errors => {return {...errors,name:"Se requiere nombre"}});
        }else{
            if(state.name.length < 3){
                setErrors(errors => {return {...errors,name:"Al menos 3 caracters"}})
            }else{
                setErrors(errors => {return {...errors,name:""}})
            }
        }

        // Control de email
        if(!state.email){
            setErrors(errors => {return {...errors,email:"Se requiere email"}});
        }else{
            if(!/\S+@+\S+\.\S/.test(state.email)){
                setErrors(errors => {return {...errors,email:"Debe ser un email"}})
            }else{
                setErrors(errors => {return {...errors,email:""}})
            }
        }

        // Control de contraseña
        if(!state.password){
            setErrors(errors => {return {...errors,password:"Se requiere contraseña"}});
        }else{
            if(state.password.length < 3){
                setErrors(errors => {return {...errors,password:"Al menos 3 caracters"}})
            }else{
                setErrors(errors => {return {...errors,password:""}})
            }
        } 
        
// ---------------------------------------------------------------

    // Formulario de ingreso
    }else{
        // Control de email
        if(state.email){
            if(!/\S+@+\S+\.\S/.test(state.email)){
                setErrors(errors => {return {...errors,email:"Debe ser un email"}})
            }else{
                setErrors(errors => {return {...errors,email:""}})
            }
        }else{
            setErrors(errors => {return {...errors,email:""}})
        }
        
        // Control de contraseña
        if(state.password){
            if(state.password.length < 3){
                setErrors(errors => {return {...errors,password:"Al menos 3 caracters"}})
            }else{
                setErrors(errors => {return {...errors,password:""}})
            }
        }else{
            setErrors(errors => {return {...errors,password:""}})
        }
    }
    
}