import React from 'react'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'

const Favorites = (props) => {
    let user = props.users.find(user => user.id === props.match.params.id)
    return (
        <div> 
             <Link to={`favorites/${props.userId}`}><button ></button></Link>
             {user.attributes.favorites}
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