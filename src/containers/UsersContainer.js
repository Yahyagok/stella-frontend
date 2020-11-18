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
export default connect(mapStateToProps,null)(UsersContainer) 