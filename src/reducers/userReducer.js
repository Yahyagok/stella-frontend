


const initialState = {
        users: [],
        userId: ''
}



export default function userReducer(prevState=initialState , action ){
    switch(action.type){
            case 'FETCH_USERS':
                    return {...prevState, users: action.payload.data}
            case 'ADD_USER':
                    return [...prevState, action.payload.data] 
            case 'GET_USER':
                    let userId = action.payload
                  
                    return  { ...prevState,  userId: userId}     
           case 'FIND_USER':
                   return { ...prevState, user: action.payload.data}
           case 'LOGIN_USER':
                   return {...prevState, user: action.payload}
           default:
                    return prevState                  
    }
}