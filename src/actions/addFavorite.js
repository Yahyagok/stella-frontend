export const addFavorite = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/favorites', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ favorite: { actor_id: data.actorId, user_id: data.userId } })
        })
        .then(response => response.json())
        .then(favorite => dispatch({type: 'ADD_FAVORITE', payload: favorite }))
    }
}