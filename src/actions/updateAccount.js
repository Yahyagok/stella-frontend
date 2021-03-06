export function updateAccount(data, userId){
    return() => {
        fetch(`http://localhost:3000/api/v1/comments/${userId}`, {
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