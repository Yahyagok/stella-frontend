const initialState = {
        users: [],
        user: {},
        userId: ''
}
export default function userReducer(prevState=initialState , action ){
    switch(action.type){
            case 'FETCH_USERS':
                    return {...prevState, users: action.payload.data}
            case 'ADD_USER':
                    return [...prevState, action.payload.data] 
            case 'GET_USER':
                    let id = action.payload
                    return  { ...prevState,  userId: id}     
           case 'FIND_USER':
                   return { ...prevState, user: action.payload.data}
           case 'GET_LOGIN_SIGNUP_USER':   
                   let user = action.payload
                   return {...prevState, user: user}
           case 'UPDATE_ACCOUNT':
                let userId = action.payload.id
                let updatedUsers = prevState.users.map(user => {
                        if(user.id === userId ){
                                user = { ...action.payload }
                                return {user}
                        }
                        else { 
                                return user 
                        }
                })
                return {...prevState, users: updatedUsers }

                

           default:
                    return prevState                  
    }
}