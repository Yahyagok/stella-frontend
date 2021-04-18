export const addComment = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/comments', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify( data)
        })
        .then(response => response.json())
        .then(comment => dispatch({ type: 'ADD_COMMENT', payload: comment} ))
    }   
}


// this is the way how you get info as payload and in reducer you added to state 