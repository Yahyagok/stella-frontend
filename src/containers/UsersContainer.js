import React from 'react'
import { connect } from 'react-redux'

class UsersContainer extends React.Component {


 
    render () {
    
        return (
            <div>
            
            </div>
        )
    }

}
const mapStateToProps = (state) => { 
    return {
        users: state.users
    }
}

const mdp = dispatch => {
    return {
        fetchUsers: () => dispatch({ type: "FETCH_USERS" })
    }
}
export default connect(mapStateToProps,mdp)(UsersContainer) 