import React from 'react' 
import { Redirect} from 'react-router-dom'
import CommentsContainer from '../containers/CommentsContainer'


const Actor = (props) => {
    
    let actor = props.actors.data.find(actor => actor.id === props.match.params.id)
    
    return (
        <div>
             <li>
            {actor ? null : <Redirect to='/actors'/> }
            {actor ? actor.attributes.name : "hello"}
            </li>
            <CommentsContainer actor={actor} />
        </div>
    )
}

export default Actor
