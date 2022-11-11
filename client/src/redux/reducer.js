var initialState = {
    films: [],
    logged: false,
    detail: {},
    reviews: []
}

export default function Reducer(state = initialState, action){
    switch (action.type) {
        case "FILMS":
            return ({
                ...state,
                films: action.payload
            })
        case "DETAIL":
            return ({
                ...state,
                detail: action.payload
            })
        case "GET_REVIEWS":
            return ({
                ...state,
                reviews: action.payload
            })
        case "LOGUEADO": 
            return ({
                ...state,
                logged: true
            })
        case "GET_FAVORITES":
            return ({
                ...state,
                favorites: action.payload
            })
        default:
            return ({
                ...state
            })
    }
}