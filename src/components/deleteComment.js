import React from 'react'
import { connect} from 'react-redux'
import {deleteComment} from '../actions/deleteComment'

class DeleteComment extends React.Component{ 

    handleSubmit = () => { 
        this.props.deleteComment(this.props.commentId)
        this.props.history.push(`/actors/${this.props.actorId}`)
    }

    render(){ 
        return (
            <div>
                <p> Are you sure do you want to delete your comment ? </p>
                <input type="submit" onClick={this.handleSubmit} /> 
     
            </div>
        )
    }


}


const msp = state => { 
    return { 
        commentId: state.comments.commentId,
        actorId: state.actors.actorId
    }
}

export default connect(msp, {deleteComment})(DeleteComment)