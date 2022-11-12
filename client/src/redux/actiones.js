import axios from "axios"

var back = axios.create({
    baseURL: "http://localhost:3001"
})

var api = axios.create({
    baseURL: "https://api.tvmaze.com"
})

export function Films(film){
    return function(dispatch){
        api.get(`/search/shows?q=${film}`)
        .then(res => dispatch({type:"FILMS", payload:res.data}))
        .catch(err => console.error(err))
    }
}

export function Details(id){
    return function(dispatch){
        api.get(`/shows/${id}`)
        .then(res => dispatch({type:"DETAIL", payload:res.data}))
        .catch(err => console.error(err))
    }
}

export function GetReviews(id){
    return function(dispatch){
        back.get(`/reviews?filmID=${id}`)
        .then(res => dispatch({type:"GET_REVIEWS",payload: res.data}))
        .catch(err => console.error(err))
    }
}

export function CreateReviews(obj){
    return function(dispatch){
        back.post("/reviews",obj)
        .then(res => dispatch(GetReviews(obj.filmID)))
        .catch(err => console.error(err))
    }
}

export function CreateUser(obj){
    return function(dispatch){
        back.post(`/users`,obj)
        .then(() => {localStorage.user = obj.email; window.location.replace("/")})
        .catch(err => console.error(err))
    }
}

export function Loguearse(obj){
    return function(dispatch){
        back.post("/users/auth",obj)
        .then(res => {
        if(res.data){
            localStorage.user = obj.email
            window.location.replace("/")
        }else{
            alert("Email o contraseña incorrectos")
        } })
        .catch(err => console.error(err))
    }
}

export function GetFavorites(userId){
    return function(dispatch){
        back.get(`/favorites?userId=${userId}`)
        .then(res => {res.data? dispatch({type:"GET_FAVORITES", payload: res.data}) : console.log("Sin fav")})
        .catch(err => console.error(err))
    }
}

export function AddFavorites(obj){
    return function(dispatch){
        back.post("/favorites",obj)
        .catch(err => console.error(err))
    }
}

export function RemoveFavorites(obj){
    return function(dispatch){
        back.delete(`/favorites?filmId=${obj.filmId}&userId=${obj.userId}`)
        .catch(err => console.error(err))
    }
}