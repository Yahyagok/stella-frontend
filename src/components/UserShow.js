import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { fetchActors} from '../actions/fetchActors'

class UserShow extends React.Component {

    // props.currentUser is your user 



    

   

   render(){

   

       return (
    
           <div>
            <Link to="/login"><button>Login </button> </Link>
            <Link to="/signup"><button>Signup </button> </Link>
            <Link to="/actors"><button>Actors </button> </Link>
            <Link to="/new"><button>Create An Actor </button> </Link>
   
            <button onClick={this.props.logout} ><span role="img" arial-label="user-show">{this.props.currentUser ? this.props.currentUser.name :  "🤵"}</span></button> 
         
            </div>
       )
   }
}

const msp = state => {
    return {
        actors: state.actors.actors
    }
}

// const mdp = dispatch => {
//     return {
//        fetchActors
//     }
// }



export default connect(msp)(UserShow)


// burdaki id yi alip , msp yi userinput ta kullnamak 
//thaht is it 

// onClick={() => {props.getUser(props.currentUser.id)}}





