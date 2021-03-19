import React from 'react'
import {connect} from 'react-redux'

const UserPage =(props) => {
   let favoriteActors = props.favorites.filter(fav => fav.attributes.user.id === props.userId )
   let uniqueActors = favoriteActors.filter((v, i, a) => a.indexOf(v) === i); 
//  console.log(props.favorites)
    return (
        <div>
            {uniqueActors.map(fav => 
                <div> {fav.attributes.actor.name}</div>

                    )}
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