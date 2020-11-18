export default function commentReducer(state =  [], action ){
    switch(action.type){
            case 'FETCH_COMMENTS':
                    return  action.payload.data
            case 'ADD_COMMENT':
                    return  [...state, action.payload.data] 
            default:
                    return state              
    }
}