import React from 'react';
import { connect} from 'react-redux'
import {addLike} from '../actions/addLike'
// import {signUpUser} from '../actions/signUpUser'
import { findUser} from '../actions/findUser'


class LikeInput extends React.Component {
    
    state = {
        userId: '' ,
        actorId: ''  
    }

   
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }) 
    }
    handleClick = (event) => {
        this.props.addLike(this.state)
        this.setState({ 
            actorId: '',
            userId: this.props.findUser(this.state.user.id)

         })

    }
    render(){  
       
        return (
            <div>
                <form >
                    <label>Actor ID:</label>
                    <input type="number" placeholder='actor id'value= {this.state.actorId} name="actor_id" onChange={this.handleChange}/><br />
                    <label>User ID:</label>
                    <input type="number" placeholder='user id'value= {this.state.userId} name="user_id" onChange={this.handleChange}/><br />
                    <span role="img" aria-label="heart" onClick={this.handleClick}>❤️</span>  
                </form>
              
            </div>
        )
    }
}
export default connect(null, {addLike, findUser})(LikeInput)