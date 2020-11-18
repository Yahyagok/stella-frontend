import React from 'react'
// import CommentInput from '../components/CommentInput'

import { connect } from 'react-redux'
import { fetchComments } from '../actions/fetchComments'
import { Route, Switch} from 'react-router-dom'
import Comment from '../components/Comment'


class CommentsContainer extends React.Component {

     componentDidMount =() =>{
         this.props.fetchComments()
    }
 
    render () {
        return (
            <div>
                <Switch>
                    {/* <Route path='/actors/:id' render={(routerProps) => <CommentInput {...routerProps}  />  } /> */}
                    <Route path='/actors/:id' render={(routerProps) => <Comment {...routerProps} comments={this.props.comments}/>}/>
                </Switch>
            </div>
        )
    }

}
const mapStateToProps = (state) => { 
    return {
        comments: state.comments
    }
}
export default connect(mapStateToProps,{fetchComments})(CommentsContainer) 