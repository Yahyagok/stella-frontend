import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
const UserPage =(props) => {
const uniqueActors = [...new Set(props.favorites.map(fav => fav.attributes))]
// console.log(props.favorites)
    return (

        <div>
           { uniqueActors.map(fav => ( fav.user.id === props.userId  && <div> <Link to={`/actor/${fav.actor.id}`}>{fav.actor.name}</Link> </div>  ) )  }

        </div>
    )
}
const msp = state => {
    return {
        favorites: state.favorites.favorites,
        userId: state.users.userId
    }
}
export default connect(msp)(UserPage) 