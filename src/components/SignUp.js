import React from 'react';
// import { connect} from 'react-redux'
// import {addUser} from '../actions/addUser'
import axios from 'axios'
import { connect } from 'react-redux';
import {Form, Button } from 'react-bootstrap'

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
        console.log(response)
        if (response.data.status === 'created') {
          this.props.handleLogin(response.data)
          this.props.getUser(parseInt(response.data.user.data.id))
           this.props.getSignUpUser(response.data.user.data)
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
    console.log(this.props.userId)
      const {name, password} = this.state
  return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
              </Form.Group>
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control  
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            </Form.Group>
            <Button variant="primary"placeholder="submit" type="submit">
              Sign Up
            </Button>
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

  const msp = state => { 
    return { 
      userId: state.users.userId,
      user: state.users.user
    }
  }

 const mdp = dispatch => {
    return {
      getUser: (id) => dispatch({ type: 'GET_USER', payload: id   }),
      getSignUpUser: (user) => dispatch({ type: 'GET_LOGIN_SIGNUP_USER', payload: user}),
  
    }
  }


export default connect(msp, mdp)(SignUp)


// getUserInfo: (id) =>dispatch({ type: 'GET_USER_INFO', payload: id})





