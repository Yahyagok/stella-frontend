import React from 'react';
import { connect} from 'react-redux'
// import {addLike} from '../actions/addLike'
// import {signUpUser} from '../actions/signUpUser'



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
            userId: ''

         })
       
        

    }
    render(){  
     
        return (
            <div>
                <form >
                    <label>Actor ID:</label>
                    <input type="number" placeholder='actor id'value= {this.state.actorId} name="actorId" onChange={this.handleChange}/><br />
                    <label>User ID:</label>
                    <input type="number" placeholder='user id'value= {this.state.userId} name="userId" onChange={this.handleChange}/><br />
                    <span role="img" aria-label="heart" onClick={this.handleClick}>❤️</span>  
                </form>
              
            </div>
        )
    }

  

          




}

const  msp = (state) => {
    return {
        user: state.user
    }
}


const  mdp =(dispatch) => {

    return {
        addLike: (data) => { dispatch({ type: 'ADD_LIKE', payload: data})}
    }
   
}
export default connect(msp, mdp)(LikeInput)