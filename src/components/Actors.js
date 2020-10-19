import React from 'react';
import { Link } from 'react-router-dom'

// import Actor from './Actor'


const Actors = (props) => {
    return (
        <div>
              {props.actors.data && props.actors.data.map(actor => 
       <li key={actor.id}>
        <Link to={`/actors/${actor.id}`}>{actor.attributes.name}</Link>
        </li>
        )}
        </div>
    )
}

export default Actors
