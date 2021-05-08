import React from 'react'
import {connect} from 'react'
const Comments = (props) => {
    return (   
        <div>
            {props.comments&& props.comments.map(comment =>
                <li key={comment.id}>
                  {comment.attributes.review }
                </li> 
                )}
        </div>
    )
}
const msp = state => {
    return {
        commentId: state.comments.commentId
    }
}
const mdp = dispatch => {
    return {
        getCommentId: (id) => dispatch({ type: 'FIND_COMMENT', payload: id })
    }
}
export default connect(msp, mdp)(Comments)



