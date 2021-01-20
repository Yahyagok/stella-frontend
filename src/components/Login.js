import React from 'react';
import { connect} from 'react-redux';
//  import {findUser} from '../actions/findUser';
 import {Link} from 'react-router-dom';
 import axios from 'axios';
//  import  { loginUser }  from '../actions/loginUser'
import { Button, FormLabel, FormGroup, FormControl } from 'react-bootstrap'
class Login extends React.Component {
        state = { 
        name: '',
        password: '',
        errors: ''
       };
    componentDidMount() {
      return this.props.loggedInStatus ? this.redirect() : null
    }
  handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    };
  handleSubmit = (event) => {
      event.preventDefault()
      const {name, password} = this.state
  let user = {
        name: name,
        password: password
      } 
      axios.post('http://localhost:3000/login', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data)
          this.props.getUser(response.data.user.id)
          this.props.getLoginUser(response.data.user)
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
          <ul>
          {this.state.errors.map(error => {
          return <li key={error}>{error}</li>
            })
          }
          </ul>
        </div>
      )
    }
  render() {
      const {name,  password} = this.state
  return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formBasicName">
          <FormLabel>Name</FormLabel>
          <FormControl type="text"  name="name"  value={name}
              onChange={this.handleChange} />
             </FormGroup>
             <FormGroup controlId="formBasicPassword">
             <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
             </FormGroup>
            <Button variant="primary"  placeholder="submit" type="submit">
              Log In
            </Button>
            <div>
              or <Link to='/signup'>sign up</Link>
            </div>
            
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
      getUser: (id) => dispatch({ type: 'GET_USER', payload: id }),
      getLoginUser: (user) => dispatch({ type: 'GET_LOGIN_SIGNUP_USER', payload: user})
    }
  }
export default connect(msp, mdp)(Login)



// return {
//   if (this.state.redirect === true) {
//     <Redirect to="/actors" />
//   }
// }


