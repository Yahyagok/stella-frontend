import React from 'react';
// import { connect} from 'react-redux'
// import {addUser} from '../actions/addUser'
import axios from 'axios'




class SignUp extends React.Component {
   
 
        state = { 
        name: '',
        password: '',
        errors: ''
       
    }
  handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    };
  handleSubmit = (event) => {
      event.preventDefault()
      const {name,  password} = this.state
      let user = {
        name: name, 
        password: password,
      }

       axios.post('http://localhost:3000/api/v1/users', {user}, {withCredentials: true})
      .then(response => {
      
         
        if (response.data.status === 'created') {
          console.log("hata")
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
    };
  redirect = () => {
      this.props.history.push('/actors')
    }
  handleErrors = () => {
      return (
        <div>
          <ul>{this.state.errors.map((error) => {
            return <li key={error}>{error}</li>
          })}</ul> 
        </div>
      )
    }
  render() {
      const {name, password} = this.state
  return (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
        
            <input 
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <button placeholder="submit" type="submit">
              Sign Up
            </button>
        
          </form>
          <div>
            {
              this.state.errors ? this.handleErrors() : null
            }
          </div>
        </div>
      );
    }
  }


export default SignUp