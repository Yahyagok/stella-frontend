export function updateComment(data, commentId){
 
    return(dispatch) => {
      
        fetch(`http://localhost:3000/api/v1/comments/${commentId}`, { 
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
             }, 
             body: JSON.stringify( {comment: { user_id: data.userId, actor_id: data.actorId, review: data.review } }  )
          })
        .then(res => res.json())
        .then(comment => dispatch({
            type: 'UPDATE_COMMENT',
            payload: comment
        }))
    }
}