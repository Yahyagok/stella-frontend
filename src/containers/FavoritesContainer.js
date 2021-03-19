import React from 'react'
import {connect} from 'react-redux'
import { fetchFavorites } from '../actions/fetchFavorites'



class FavoritesContainer extends React.Component {

    render(){
        return (
            <div>

            </div>
        )
    }
}
export default connect(null, {fetchFavorites})(FavoritesContainer)