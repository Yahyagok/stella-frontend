import React from 'react';
import { Link } from 'react-router-dom'
// import Actor from './Actor'
import { connect } from 'react-redux'
const Actors = (props) => {
//   console.log(props)

    return (
        
        <div>
              {props.actors && props.actors.map(actor => 
       <li key={actor.id}>
        <Link to={`/actors/${actor.id}`}>{actor.attributes.name}</Link>
        </li>
        )}
        </div>
    )
}


const msp = (state) => {
    return {
        actors: state.actors.actors
    }
}
export default connect(msp)(Actors)
