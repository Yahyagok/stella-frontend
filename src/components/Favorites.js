import React from 'react'
import { connect } from 'react-redux'
import {addFavorite} from '../actions/addFavorite'


const Favorites = (props) => {
    // let user = props.users && props.users.find(user => parseInt(user.id) === props.match.params.id)
    let data = {
        userId: props.userId, 
        actorId: props.actorId
    }

   let alreadyFavorite = () => {
     props.favorites.map(fav => {
            if((fav.attributes.actor.id !== props.actorId) && (fav.attributes.user.id  !== props.userId) ){
                   props.addFavorite(data)
                }
            })    
    }
    return (  
        <div> 
              <button onClick={alreadyFavorite} >Add To Favorites</button>
        </div>
    )
}
const msp = state => {
    return {
        userId: state.users.userId,
        users: state.users, 
        actorId: state.actors.actorId,
        favorites: state.favorites.favorites     
    }
}
// const mdp = dispatch => {
//     return {
//         addFavorite: (data) => dispatch({type: 'ADD_FAVORITES', payload: data })
//     }
// }
export default connect(msp, {addFavorite})(Favorites)