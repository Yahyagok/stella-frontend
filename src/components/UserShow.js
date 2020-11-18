import React from 'react'
import { Link } from 'react-router-dom'

function UserShow(props){
    return (
        <div>
         <Link to="/login"><button>Login </button> </Link>
         <Link to="/signup"><button>Login </button> </Link>
         <button><span role="img" arial-label="user-show">{props.currentUser ? props.currentUser.name :  "🤵"}</span></button> 
         </div>
    )
}

export default UserShow




{/* // 
// <button><span role="img" arial-label="user-show">{"🤵"}</span></button>  */}