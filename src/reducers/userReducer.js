const initialState = {
        actros: [], 
        likes: [],
        comments: [],
        users: [],
        user: ''
}



export default function userReducer(prevState=initialState , action ){
    switch(action.type){
            case 'FETCH_USERS':
                    return action.payload.data
            case 'ADD_USER':
                    return [...prevState, action.payload.data] 
            case 'SIGNUP_USER':
                    let userId = action.payload.id
                  
                    let newUsers = prevState.users.map(
                            user => {
                                    if (user.id === userId){
                                     prevState.user =  user }
                                    return user 
                            }
                    )
                    return  { ...prevState,  users: newUsers,  user: action.payload.data}     
           case 'FIND_USER':
                   return { ...prevState, user: action.payload.data}
           case 'LOGIN_USER':
                   return [...prevState, action.payload.data]
           default:
                    return prevState                  
    }
}