import React from 'react' 
import { Redirect} from 'react-router-dom'







const Comment = (props) => {

    let comment = props.comments.filter(comment => comment.attributes.actor.id == props.match.params.id)
    return (
        <div> 
            {comment ? null : <Redirect to='/actors'/> }
           { comment.map( eachComment => <div key={eachComment.id}>Comment from - {`${eachComment.attributes.user.name}`} -- {eachComment.attributes.review}</div>  ) }
     
        </div>
    )
}
export default Comment