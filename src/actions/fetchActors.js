export function fetchActors(){
   return (dispatch) => { 
    fetch('http://localhost:3000/api/v1/actors')
    .then(res => res.json())
    .then(actors => dispatch({
        type: 'FETCH_ACTORS', 
        payload: actors
    }))
    }
}
