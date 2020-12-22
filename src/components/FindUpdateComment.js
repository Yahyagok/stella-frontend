import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'


class FindUpdateComment extends React.Component {
  

    handleClick = () => {  
        this.props.getCommentId(parseInt(this.props.id))

    }

    handleDelete = () => { 
        this.props.getCommentId(parseInt(this.props.id)) 
        this.props.deleteComment(parseInt(this.props.id))
            // this.props.history.push(`/actors/${this.props.actorId}`)
          return  <Redirect to='/actors/:id' />

       
    }
    render(){
        // console.log( this.props.deleteComment(parseInt(this.props.id)))
        return ( 
            <div >   
            <Link to={`/updatecomment/${this.props.id}`} onClick={this.handleClick } ><button> Update Comment </button> </Link>
            <button onClick={this.handleDelete }> Delete Comment </button>
            </div>
        )
    }
}
const msp = state => {
    return {
        commentId: state.comments.commentId,
        actorId: state.actors.actorId,
        userId: state.users.userId
    }
}
const mdp = dispatch => {
    return {
        getCommentId: (id) => dispatch({ type: 'FIND_COMMENT', payload: id }), 
        deleteComment: (id) => dispatch({ type: 'DELETE_COMMENT', payload: id })
        // updateComment(data, commentId)
    }
}
export default connect(msp, mdp)(FindUpdateComment)