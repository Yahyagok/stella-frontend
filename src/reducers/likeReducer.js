export default function likeReducer(state = [], action ){
    switch(action.type){
            case 'FETCH_LIKES':
                    return  action.payload.data
            case 'ADD_LIKE':
                    return [...state, action.payload]
            default:
                    return state                  
    }
}