import React from 'react';
import { connect} from 'react-redux'
import {addLike} from '../actions/addLike'
// import {signUpUser} from '../actions/signUpUser'
import Like from '../components/Like'

class LikeInput extends React.Component {
    
    state = {
        userId: '' ,
        actorId: ''
    }

    handleClick = () => { 
       let data = { 
            userId: parseInt(this.props.userId),
            actorId: parseInt(this.props.actorId)
        }
      this.props.userId ? this.props.addLike(data) : alert("If you would like to like,You need to signin or login !!"); 
        this.setState({ 
            actorId: '',
            userId:  ''
         })   
    }
    render(){  
 
        return (
            <div>
                <form >
                    <span role="img" aria-label="heart" onClick={this.handleClick}>❤️</span>  
                </form>
                <Like actor={this.props.actor} /> 
              
            </div>
        )
    }
}
const  msp = (state) => {
    return {
        user: state.user,
        actorId: state.actors.actorId,
        userId: state.users.userId
    }
}

export default connect(msp, {addLike})(LikeInput)