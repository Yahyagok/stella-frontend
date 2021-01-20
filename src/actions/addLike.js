export const addLike = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/likes',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ like: { actor_id: data.actorId, user_id: data.userId } })
        })
        .then(response => response.json())
        .then(like => dispatch({ type: 'ADD_LIKE', payload: like }))
    }
    
}