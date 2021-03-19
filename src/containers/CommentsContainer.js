import React from 'react'
// import CommentInput from '../components/CommentInput'

import { connect } from 'react-redux'
import { fetchComments } from '../actions/fetchComments'
import { Route, Switch} from 'react-router-dom'
import Comment from '../components/Comment'


class CommentsContainer extends React.Component {

     componentDidMount = () =>{
         this.props.fetchComments()
    }
 
    render () {
        // console.log(this.props.comments)
        return (
            <div>
                <Switch>
                    {/* <Route path='/actors/:id' render={(routerProps) => <CommentInput {...routerProps}  />  } /> */}
                    <Route path='/actors/:id' render={(routerProps) => <Comment {...routerProps} />}/>
                </Switch>
            </div>
        )
    }

}
// const mapStateToProps = (state) => { 
//     return {
//         comments: state.comments
//     }
// }
export default connect(null,{fetchComments})(CommentsContainer) 