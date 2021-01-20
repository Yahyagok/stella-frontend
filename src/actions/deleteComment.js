export function deleteComment( commentId){
   
    return(dispatch) => {
      
        fetch(`http://localhost:3000/api/v1/comments/${commentId}`, { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
             }
          })
        .then(() => dispatch({
            type: 'DELETE_COMMENT',
            payload: commentId
        }))
    }
}




