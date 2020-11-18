import React from 'react';
import { connect} from 'react-redux'
import {addComment} from '../actions/addComment'

class CommentInput extends React.Component {
    state = {
        review: '',
        actor_id: '',
        user_id: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }) 
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addComment(this.state)
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
                    <label>Actor ID:</label>
                    <input type="number" placeholder='actor id'value= {this.state.actor_id} name="actor_id" onChange={this.handleChange}/><br />
                    <label>User ID:</label>
                    <input type="number" placeholder='user id'value= {this.state.user_id} name="user_id" onChange={this.handleChange}/><br />
                  
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default connect(null, {addComment})(CommentInput)
