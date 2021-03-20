import React from 'react'
import {connect} from 'react-redux'
const UserPage =(props) => {
//    let favoriteActors = props.favorites.filter(fav => fav.attributes.user.id === props.userId)
// let uniqueActors = props.favorites.filter((item, i, ar) => ar.indexOf(item) === i);
// let uniqueActors = [...new Set(props.favorites.attributes.user.id )]
//  console.log(props.favorites)
const uniqueActors = [...new Set(props.favorites.map(fav => fav.attributes.actor && fav.attributes.actor.name))]



console.log(uniqueActors)
    return (
        <div>
            { uniqueActors.map(fav => 
                <div> { fav.attributes.actor  ? fav.attributes.actor.name : null }</div>
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