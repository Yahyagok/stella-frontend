import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UpdateAccount extends React.Component {
render(){
    return (
        <div>
            <Link to={`updatecurrentuser/${this.props.userId}`}><button >Update Account</button></Link>
        </div>
        )   
    }
}
const msp = state => {
    return {
        userId: state.users.userId,
        user: state.users.user
    }
}
export default connect(msp)(UpdateAccount);