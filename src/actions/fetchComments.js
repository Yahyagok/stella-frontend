export function fetchComments(){
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/comments')
        .then(res => res.json())
        .then(comments => dispatch({
            type: 'FETCH_COMMENTS',
            payload: comments
        }))
    }
}