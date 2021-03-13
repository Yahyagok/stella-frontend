import React from 'react'
import { connect } from 'react-redux'
import {updateAccount} from '../actions/updateAccount'
class UpdateCurrentUser extends React.Component { 
    state = {
        name: '',
        password: ''
    }
    handleChange = (event) => {
     this.setState({  [event.target.name]: event.target.value })  
    }
    handleSubmit = () => {
      
      let data = { 
            name: this.state.name,
            password: this.state.password
        }
      this.props.updateAccount(data, parseInt(this.props.userId) )
        this.props.history.push(`/actors`)
    }
    render(){
      return (
          <div>
           <label>Update Your Profile </label>
              <input type="text" placeholder='name' name="name" value= {this.state.name} onChange={this.handleChange}/><br/>
              <input type="password" placeholder='password' name="password" value= {this.state.password} onChange={this.handleChange}/><br/>
              <input type="submit" variant="primary"  onClick={this.handleSubmit} /> 
          </div>
      )
    }
 
}
const msp = state => {
    return {
        userId: state.users.userId,
        user: state.users.user
    }
}
const mdp = dispatch => {
    return {
        updateAccount: (data, userId) => dispatch(updateAccount(data, userId))
    }
}
export default connect(msp, mdp )(UpdateCurrentUser)