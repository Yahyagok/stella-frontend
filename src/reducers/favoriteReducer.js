const initialState = {
    favorites: []
}

export default function favoriteReducer(prevState=initialState, action){
    switch(action.type){
        case 'FETCH_FAVORITES': 
            return { ...prevState, favorites: action.payload.data  }
        case 'ADD_FAVORITES':
            return {...prevState, favorites: [...prevState.favorites, action.payload.data]  }  
        default: 
            return prevState
    }

}
