export function findUser(userId){
    return (dispatch) => { 
     fetch(`http://localhost:3000/api/v1/users/${userId}`)
     .then(res => res.json())
     .then(user => dispatch({
         type: 'FIND_USER', 
         payload: user
     }))
     }
 }