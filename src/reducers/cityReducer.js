const initialState = {
    cities:[],
    cityId: ''
}

export default function cityReducer(prevState=initialState, action ){
    switch(action.type){  
            case 'FETCH_CITIES': 
                    return  {...prevState, cities: action.payload.data}         
            default:
                    return prevState                  
    }
}