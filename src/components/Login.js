import React from 'react';
// import { connect} from 'react-redux';
//  import {findUser} from '../actions/findUser';
 import {Link} from 'react-router-dom';
 import axios from 'axios';
//  import  { loginUser }  from '../actions/loginUser'



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
      // this.props.login(this.props.handleLogin)

      axios.post('http://localhost:3000/login', {user}, {withCredentials: true})
      .then(response => {
        // console.log(response)
        if (response.data.logged_in) {
          // console.log(response)
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
      // this.redirect(/actors)
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
    // console.log(this.props)
      const {name,  password} = this.state
  return (

        <div>
          <h1>Log In</h1>
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
              Log In
            </button>
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
export default Login



// return {
//   if (this.state.redirect === true) {
//     <Redirect to="/actors" />
//   }
// }