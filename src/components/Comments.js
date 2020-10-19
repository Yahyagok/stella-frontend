import React from 'react'


const Comments = (props) => {
    return (
        <div>
            {props.comments && props.comments.map(comment =>
                <li key={comment.id}>
                    {comment.review ? comment.id : "hey"}
                </li> 
                )}
        </div>
    )
}

export default Comments

