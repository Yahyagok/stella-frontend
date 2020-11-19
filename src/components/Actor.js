import React from 'react' 
import { Redirect} from 'react-router-dom'
import CommentInput from '../components/CommentInput'
import LikeInput from '../components/LikeInput'
// import images from './images'




const Actor = (props) => {
    // console.log(props)
    // debugger
    let actor = props.actors.find(actor => actor.id ===parseInt(props.match.params.id))
//   console.log(props.loggedInUser)
    return (
      
        <div>
                {actor ? null : <Redirect to='/actors'/> }
                <div><img src={require(`../photo/${actor.attributes.image}`)} alt={actor.attributes.name} /></div>
                <div> Name: {actor.attributes.name}</div> 
                <div>Contact Num: {actor.attributes.contact_info}</div> 
                <div>Description: {actor.attributes.description}</div>
                <CommentInput loggedInUser={props.loggedInUser}/>
                <LikeInput  />           
        </div>

    )
}

export default Actor
