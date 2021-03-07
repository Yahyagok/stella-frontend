export function updateAccount(data, userId){
    debugger
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify( {user: { password: data.password, name: data.name  } }  )
        })
        .then(res => res.json())
        .then(user => dispatch({ 
            type: 'UPDATE_ACCOUNT',
            payload: user
         }))
    }
}