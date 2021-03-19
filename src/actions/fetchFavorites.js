export function fetchFavorites(){
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/favorites')
        .then(res => res.json())
        .then(favorites => dispatch({
        type: 'FETCH_FAVORITES',
        payload: favorites
        }))
    }
}