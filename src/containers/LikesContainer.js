import React from 'react'
// import CommentInput from '../components/CommentInput'
import Like from '../components/Like'
import { connect } from 'react-redux'
import { fetchLikes } from '../actions/fetchLikes'
import { Route, Switch} from 'react-router-dom'




class LikesContainer extends React.Component {

     componentDidMount =() =>{
         this.props.fetchLikes()
    }
 
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path='/actors/:id' render={(routerProps) => <Like {...routerProps} likes={this.props.likes}/>}/>
                </Switch>
            </div>
        )
    }

}
const mapStateToProps = (state) => { 
    return {
        likes: state.likes
    }
}
export default connect(mapStateToProps,{fetchLikes})(LikesContainer) 