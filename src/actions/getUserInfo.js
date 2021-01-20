export const getUserInfo = (userId) =>{
    return (dispatch) => { 
     fetch(`http://localhost:3000/api/v1/users/${userId}`)
     .then(res => res.json())
     .then(user => dispatch({
         type: 'GET_USER_INFO', 
         payload: user
     }))
     }
 }