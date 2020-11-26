import React from 'react' 
import { Redirect} from 'react-router-dom'
import CommentInput from '../components/CommentInput'
import LikeInput from '../components/LikeInput'
// import images from './images'




const Actor = (props) => {
    // debugger
    let actor = props.actors.find(actor => actor.id === props.match.params.id)
    
    // console.log(  actor.relationships)

    return (
     
      
        <div>
                {actor ? null : <Redirect to='/actors'/> }
                <div><img src={require(`../photo/${actor.attributes.image}`)} alt={actor.attributes.name} /></div>
                <div> Name: {actor.attributes.name}</div> 
                <div>Contact Num: {actor.attributes.contact_info}</div> 
                <div>Description: {actor.attributes.description}</div>
                <CommentInput loggedInUser={props.loggedInUser}/>
               
                <LikeInput  />    
                {actor.relationships.likes.data.length}       
        </div>

    )
}

export default Actor
