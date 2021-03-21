import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class YourFavoriteActors extends React.Component {   
    render(){
        return (
            <div>
                <Link to={`/user/${this.props.userId}`}><button>Your Favorite Actors </button></Link>
            </div>
        )
    }
}
const mdp = state => {
    return {
        userId: state.users.userId
    }
}
export default connect(mdp)(YourFavoriteActors)