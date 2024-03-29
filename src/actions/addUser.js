export const addUser = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(user => dispatch({ type: 'ADD_USER', payload: user }))
    }   
}