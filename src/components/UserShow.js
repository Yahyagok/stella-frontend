import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import {Button} from '../styled'
import {  Navbar, NavLink, Nav } from "react-bootstrap"
// import { fetchActors} from '../actions/fetchActors'
import UpdateAccount from '../components/UpdateAccount'
class UserShow extends React.Component {
     updateAccount = () => {
      return  <UpdateAccount/>
   }
  
   render(){
  

          
   
       return (
      
           <div>
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand >Stella <span role='img' aria-label="tv">📺</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavLink ><Link to="/login"><button>Login </button></Link></NavLink>  
                        <NavLink ><Link to="/signup"><button>Signup </button> </Link></NavLink> 
                        <NavLink ><Link to="/actors"><button>Actors </button> </Link>    </NavLink> 
                        <NavLink ><Link to="/new"><button>Create An Actor </button> </Link> </NavLink> 
                     {this.props.user.name && <NavLink ><button onClick={this.props.logout} ><span role="img" arial-label="user-show">{this.props.user.name  ? this.props.user.name : "🤵"}</span></button></NavLink>  }
                    { this.props.user.attributes && <NavLink ><button onClick={this.props.logout} ><span role="img" arial-label="user-show">{ this.props.user.attributes.name  ? this.props.user.attributes.name   :  "🤵"}</span></button></NavLink>      } 
                   { this.props.user ?  <button onClick={this.updateAccount}>Update your profile</button> : null  } 
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </div>    
       )
   }
}
const msp = state => {
    return {
        actors: state.actors.actors, 
        user: state.users.user,
        userId: state.users.userId
    }

}


export default connect(msp)(UserShow)


// burdaki id yi alip , msp yi userinput ta kullnamak 
//thaht is it 
// onClick={() => {props.getUser(props.currentUser.id)}}