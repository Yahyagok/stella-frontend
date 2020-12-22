import React from 'react' 
import { Redirect} from 'react-router-dom'
import CommentInput from '../components/CommentInput'
import LikeInput from '../components/LikeInput'
import { connect } from 'react-redux'
// import Comment from '../components/Comment'
import CommentsContainer from '../containers/CommentsContainer'

const Actor = (props) => {
    // debugger
    let actor = props.actors.find(actor => actor.id === props.match.params.id)
    
    // console.log(  props.comments)

    return (  
        <div>
                {actor ? null : <Redirect to='/actors'/> }
                <div><img src={require(`../photo/${actor.attributes.image}`)} alt={actor.attributes.name} /></div>
                <div> Name: {actor.attributes.name}</div> 
                <div>Contact Num: {actor.attributes.contact_info}</div> 
                <div>Description: {actor.attributes.description}</div>
                <CommentInput loggedInUser={props.loggedInUser}/>
                <CommentsContainer /> 
                {/* <Comment />  */}        
                <LikeInput actor={actor}  />      
        </div>
    )
}
const msp = (state) => {
    return {
        actors: state.actors.actors
    }
}
// const mdp = dispatch => {
//     return {     
//         actorId: (id) =>  dispatch({type: 'FIND_ACTOR', payload: id})  
//      }
// }
export default connect(msp)(Actor)
