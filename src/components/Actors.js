import React from 'react';
import { Link } from 'react-router-dom'
// import Actor from './Actor'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'


class Actors extends  React.Component {

    state = {
        search: ''
    }

    handleSearch =(event) => {
        this.setState({ search: event.target.value})
    }


    render(){
    
            let allActors = this.props.actors
            let filteredActors =  allActors.filter( actor => actor.attributes.name.toLowerCase().includes(this.state.search.toLowerCase() ))
            return (
                
                 <div>
                      {filteredActors && filteredActors.map(actor => 
                    <li key={actor.id} onClick={() => this.props.getUser(this.props.loggedInUser.id)} >
                        <div><img src={require(`../photo/${actor.attributes.image}`)} alt={actor.attributes.name} /></div> 
                    <Link onClick={() => this.props.actorId(parseInt(actor.id))} to={`/actors/${actor.id}`}>{actor.attributes.name}</Link>
                    </li>
                    )}
                    <SearchBar  search={this.state.search} handleSearchChange={this.handleSearch} />
                </div>
            )
      }

    }


const msp = (state) => {
    return {
        actors: state.actors.actors
    }
}


const mdp = dispatch => {
    return {     
        actorId: (id) =>  dispatch({type: 'FIND_ACTOR', payload: id}),
        getUser: (id) => dispatch({ type: "GET_USER", payload: id})
     }
}

export default connect(msp, mdp)(Actors)

{/* <div><img src={require(`../photo/${actor.attributes.image}`)} alt={actor.attributes.name} /></div> */}
//<img src={require('./logo.jpeg')} />
