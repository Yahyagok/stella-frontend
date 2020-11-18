export function fetchLikes(){
    return (dispatch) => { 
     fetch('http://localhost:3000/api/v1/likes')
     .then(res => res.json())
     .then(likes => dispatch({
         type: 'FETCH_LIKES', 
         payload: likes
     }))
     }
 }