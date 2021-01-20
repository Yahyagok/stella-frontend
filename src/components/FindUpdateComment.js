import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import {  Button } from "react-bootstrap"

class FindUpdateComment extends React.Component {
    handleClick = () => {  
        this.props.getCommentId(parseInt(this.props.id))
    }
    handleDelete = () => { 
  
        this.props.getCommentId(parseInt(this.props.id)) 
        this.props.deleteComment(parseInt(this.props.id))
          return  <Redirect to='/actors/:id' />   
    }
    render(){
        return ( 
            <div >   
            <Link to={`/updatecomment/${this.props.id}`} onClick={this.handleClick } ><Button > Update Comment </Button> </Link>
            <Link to={`/deletecomment/${this.props.id}`} onClick={this.handleDelete } ><Button> Delete Comment </Button> </Link>
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
    }
}
export default connect(msp, mdp)(FindUpdateComment)