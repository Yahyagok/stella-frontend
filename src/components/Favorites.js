import React from 'react'
import { connect } from 'react-redux'
import {addFavorite} from '../actions/addFavorite'


const Favorites = (props) => {
    // let user = props.users && props.users.find(user => parseInt(user.id) === props.match.params.id)
    let data = {
        userId: props.userId, 
        actorId: props.actorId
    }
    return (
      
        <div> 
              <button onClick={() => props.addFavorite(data)} >Add To Favorites</button>
        </div>
    )
}
const msp = state => {
    return {
        userId: state.users.userId,
        users: state.users, 
        actorId: state.actors.actorId
        
    }
}
// const mdp = dispatch => {
//     return {
//         addFavorite: (data) => dispatch({type: 'ADD_FAVORITES', payload: data })
//     }
// }
export default connect(msp, {addFavorite})(Favorites)