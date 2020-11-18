import React from 'react';
// import { connect} from 'react-redux';
import ActorsContainer from './containers/ActorsContainer'
import CommentsContainer from './containers/CommentsContainer'
import LikesContainer from './containers/LikesContainer.js'
import UsersContainer from './containers/UsersContainer.js'
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'


class App extends React.Component {

    state = { 
        isLoggedIn: false,
        user: {}
       };
    
  componentDidMount() {
      this.loginStatus()
    }
  loginStatus = () => {
      axios.get('http://localhost:3000/logged_in', {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
    }
  handleLogin = (data) => {
   
      this.setState({
        isLoggedIn: true,
        user: data.user.data
      })
    }
  handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
    }

  render() {
    return (
      <div className="App">
        <NavBar currentUser = {this.state.user} /> 
           <BrowserRouter>
          <Switch>
            <Route exact path="/users" render={() => <UsersContainer />}   />
            <Route exact path="/likes" render={() => <LikesContainer />}   />
            <Route exact path="/comments" render={() => <CommentsContainer  />}   />
            <Route exact path="/actors" render={() => <ActorsContainer  loggedInUser={ this.state.user } handleLogin= {this.handleLogin} />}   />
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <SignUp  {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
          </Switch>
          </BrowserRouter>
      </div>
      )
  }
}
export default App;

// { this.state.isLoggedIn ?  <ActorsContainer  loggedInUser={ this.state.user } handleLogin= {this.handleLogin}  /> : null }

// second argument of connect can be mapDispatchToProps or action function itself
//if we use action function itself , we need to import thta file   
