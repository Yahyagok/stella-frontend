import React from 'react' 
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import FindUpdateComment from '../components/FindUpdateComment'
// import UpdateComment from '../components/UpdateComment'
// import { Route} from 'react-router-dom'

class Comment extends React.Component {
    state = { 
        review: ''
    }
    data = { 
        actorId: this.props.actorId,
        userId: this.props.userId,
        review: this.state.review
    }
    handleChange = (event) => {
        this.setState ({ [event.target.name]: event.target.value })
      }
//  updateAComment = (eachComment) => {
//     // console.log(eachComment)
  
//     let findedComment = this.props.comments.find(comment => comment.id === eachComment.id )

 
//         this.props.findComment(findedComment)

//         console.log(findedComment)
//     }
   multipleOnClickForUpdateButton = (data, eachComment) => (
      <div> 
        {/* <div>  {this.updateAComment(eachComment)}  </div>  */}
      <div>  {this.props.findComment(eachComment.attributes.review) } </div>  
        <form>
                   <label>update Comment</label>
                   <input type="text" variant="primary" placeholder='update' name="name" onChange={this.handleChange} value={this.state.review} ></input>       
        </form>
        <div> {this.props.updateComment(data, eachComment.id)} </div>
      </div>       
  )
   putUpdateButton = (eachComment) => {
        if (this.props.userId === eachComment.attributes.user.id) {
        return ( 
       <FindUpdateComment {...eachComment}  /> 
        )
       }  
  }  
  render (){
    let comments = this.props.comments.filter(comment => comment.attributes.actor && comment.attributes.actor.id == this.props.match.params.id)
      return ( 
           <div> 
              <div>{this.props.comments ? null : <Redirect to='/actors'/>}</div> 
               {comments &&  comments.map( eachComment => <div  key={eachComment.id} > Comment from -     
             {`${eachComment.attributes.user.name}`}--  
              {eachComment.attributes.review}
              <div>  {this.putUpdateButton(eachComment)}  </div>  
              </div> 
             ) } 

           </div>    
           )
  }
} 
const msp = (state) => {
    return {
        comments: state.comments.comments,
        userId: state.users.userId, 
        actorId: state.actors.actorId,
        commentId: state.comments.commentId 
      }
}
const mdp = dispatch => {
    return {
        findComment: (editReview) => dispatch({ type: 'FIND_UPDATE_COMMENT', payload: editReview  }), 
        updateComment: (data, commentId ) => dispatch({ type: 'UPDATE_COMMENT', payload: data, commentId })
      
    }
}
export default connect(msp, mdp)(Comment)





