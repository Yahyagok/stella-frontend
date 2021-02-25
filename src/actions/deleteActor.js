export function deleteActor(actorId){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/actors/${actorId}`, { 
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
             }
          })
        .then(() => dispatch({
            type: 'DELETE_ACTOR',
            payload: actorId
        }))
    }

    }
