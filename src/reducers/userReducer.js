export default function userReducer(state = { users: [], user: '' } , action ){
    switch(action.type){
            case 'FETCH_USERS':
                    return action.payload.data
            case 'ADD_USER':
                    return [...state, action.payload.data] 
            case 'SIGNUP_USER':
                    return  { ...state, user: action.payload.data}
           case 'FIND_USER':
                   return { ...state, user: action.payload.data}
           case 'LOGIN_USER':
                   return [...state, action.payload.data]
           default:
                    return state                  
    }
}