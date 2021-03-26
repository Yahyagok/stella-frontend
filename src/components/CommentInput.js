import React from 'react';
import { connect} from 'react-redux'
import {addComment} from '../actions/addComment'
class CommentInput extends React.Component {
    state = {
        review: '',
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }) 
    }
    handleSubmit = (event) => {
        event.preventDefault()
    let data = {
        review: this.state.review,
        actor_id: this.props.actorId,
        user_id: this.props.userId
        }
       this.props.userId ?  this.props.addComment(data) : alert("If you like to give comment, you need to signin or login !!")
        this.setState({ 
            review: '',
            actor_id: '',
            user_id: ''
         }) 
    }
    render(){   
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Review:</label>
                    <input type="textarea" placeholder='Comment A Review' name="review" value= {this.state.review} onChange={this.handleChange}/><br/>
                    <input type="submit" /> 
                </form>
            </div>
        )
    }
}
const msp = (state) => {
    return {
        actorId: state.actors.actorId,
        userId: state.users.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (data) =>  dispatch(addComment(data))
    }
}

export default connect(msp, mapDispatchToProps)(CommentInput)
