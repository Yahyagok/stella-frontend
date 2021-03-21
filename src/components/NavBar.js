import React from 'react'
import UserShow from '../components/UserShow'



 
function NavBar (props){
   
    return (
        <div> 
            <UserShow  currentUser= {props.currentUser} logout={props.logout} />
        </div>
    )
}



export default NavBar