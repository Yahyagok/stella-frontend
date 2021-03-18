import React from 'react';
// import { connect} from 'react-redux';
import ActorsContainer from './containers/ActorsContainer'
// import CommentsContainer from './containers/CommentsContainer'
import LikesContainer from './containers/LikesContainer.js'
import UsersContainer from './containers/UsersContainer.js'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import { fetchActors } from './actions/fetchActors'
import { fetchUsers } from './actions/fetchUsers'
import { connect} from 'react-redux';
import Actor from './components/Actor';
import UpdateComment from './components/UpdateComment'
import DeleteComment from './components/DeleteComment'
import ActorInput from './components/ActorInput'
import UpdateAccount from './components/UpdateAccount'
import UpdateCurrentUser from './components/UpdateCurrentUser'
import Favorites from './components/Favorites'

class App extends React.Component {
    state = { 
        isLoggedIn: false,
        user: {}
       };
  loginStatus = () => {
      axios.get('http://localhost:3000/logged_in', {withCredentials: true})
      .then(response => {
    // console.log(this.props.userLogin())    
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
        user: data.user
      },
       () => 
      {localStorage.user_id = data.user.id}
      )
    }
  handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      }, () => {
        localStorage.removeItem("user_id")
        this.props.history.push('/login')
      })
    }
    componentDidMount() {
       this.props.fetchActors()
       this.props.fetchUsers()
      this.loginStatus()
      const user_id = localStorage.user_id
      if(user_id){
        fetch('http://localhost:3000/auto_login', {
          headers: {
            "Authorization": user_id
          }
        })
        .then(res => res.json())
        .then(response => {
          if(response.errors){
            alert(response.errors)
          }else {
            this.setState({  user: response})
          }
        })
      }
    }
  render() {
    return (
      <div className="App">  
           <NavBar  currentUser = {this.state.user }  logout={this.handleLogout}/> 
            <Switch> 
            <Route exact path="/users" render={() => <UsersContainer />}   />
            <Route exact path="/likes" render={() => <LikesContainer />}   />
            {/* <Route exact path="/comments" render={() => <CommentsContainer  />}   /> */}
            <Route path='/actors/:id' render={(routerProps ) => <Actor {...routerProps} loggedInUser={this.props.loggedInUser} />}/>
            <Route exact path="/actors" render={(routerProps) => <ActorsContainer {...routerProps}  loggedInUser={ this.state.user } handleLogin= {this.handleLogin} />}   />
            <Route path='/updatecomment/:id' render={(routerProps ) => <UpdateComment {...routerProps} />}/> 
            <Route path='/deletecomment/:id' render={(routerProps ) => <DeleteComment {...routerProps} />}/>   
            <Route exact  path="/new" render={(routerProps) => <ActorInput {...routerProps}  />}   />
            <Route path="/updatecurrentuser/:id" render={(routerProps) => <UpdateCurrentUser {...routerProps} /> }/> 
            <Route  exact path="/updateaccount" render={(routerProps) => <UpdateAccount {...routerProps} /> }/> 
            <Route path="/favorites/:id" render={(routerProps) => <Favorites {...routerProps} /> }/> 
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
      
      </div>
      )
  }
}
const mapStateToProps = (state) => { 
  return  {
      actors: state.actors, 
      users: state.users

  }
}
// const mdp = dispatch => {
//   return {
//     fetchUsers: () => dispatch( { type: 'FETCH_USERS'})
//   }
// }
export default connect(mapStateToProps, {fetchActors, fetchUsers})(App)
// { this.state.isLoggedIn ?  <ActorsContainer  loggedInUser={ this.state.user } handleLogin= {this.handleLogin}  /> : null }
// second argument of connect can be mapDispatchToProps or action function itself
//if we use action function itself , we need to import thta file   
