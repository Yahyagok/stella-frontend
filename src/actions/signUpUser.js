export const signUpUser = (userId) =>{
    
    return (dispatch) => { 
     fetch(`http://localhost:3000/api/v1/users/${userId}`)
     .then(res => res.json())
     .then(user => dispatch({
         type: 'SIGNUP_USER', 
         payload: user
     }))
     }
 }