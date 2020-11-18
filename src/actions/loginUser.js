export const loginUser = (data) => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/logged_in')
        .then(response => response.json())
        .then(user => dispatch({ type: 'LOGIN_USER', payload: user }))
    }
    
}