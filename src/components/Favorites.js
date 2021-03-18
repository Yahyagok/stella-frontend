import React from 'react'
import { connect } from 'react-redux'


const Favorites = (props) => {
    // let user = props.users && props.users.find(user => parseInt(user.id) === props.match.params.id)
    console.log(props.users)
    return (
      
        <div> 
              <button >Add To Favorites</button>
        </div>
    )
}
const msp = state => {
    return {
        userId: state.users.userId,
        users: state.users
    }
}
export default connect(msp)(Favorites)