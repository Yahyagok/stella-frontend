import React from 'react'
import { connect} from 'react-redux'
import {updateComment} from '../actions/updateComment'
class UpdateComment extends  React.Component {

    state = {
        updatedReview: '', 
        makeAInput: false 
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }) 

     }
     handleSubmit = () => { 
      let data = { 
            actorId: this.props.actorId, 
            userId: this.props.userId, 
            review: this.state.updatedReview
        }
        this.props.updateComment(data, this.props.commentId)
        this.setState({  updatedReview: '' })
        this.props.history.push(`/actors/${this.props.actorId}`)
     }
     comment = this.props.comments && this.props.comments.find(comment =>  comment.id === this.props.match.params.id )
        render(){  
            return (     
            <div>
             <label>Update Your Comment:</label>
              <input type="text" placeholder='Update Comment' name="updatedReview" value= {this.state.updatedReview} onChange={this.handleChange}/><br/>
              <input type="submit" onClick={this.handleSubmit} /> 
            </div> 
            )
        }
}
const msp = state => { 
    return { 
        comments: state.comments.comments, 
        actorId: state.actors.actorId, 
        userId: state.users.userId, 
        commentId: state.comments.commentId
    }
  }

// const mdp = () => { 
//     return { 
//         updateComment
//     }
// }
export default connect(msp, {updateComment})(UpdateComment)