const initialState = {
    favorites: []
}

export default function favoriteReducer(prevState=initialState, action){
    switch(action.type){
        case 'ADD_FAVORITES':
            return {...prevState, favorites: [...prevState.favorites, action.payload.data]  }
    }

}
