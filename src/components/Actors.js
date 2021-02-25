import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import {  Container, Row, Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import ButtonForFavorite from '../components/ButtonForFavorite'
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
                 <div style={{display: 'grid', gridTemplateColumns: 'repeat( 5 , 1fr )', width: '600px',  margin: '100px',gap: '100px', textAlign: 'left',  lineHeight: '45px',   fontSize: '15px'}}  >
                      {filteredActors && filteredActors.map(actor => 
                               <Container >
                            <Row >
                               <Col xs={6} md={4}    >
                                  <div key={actor.id} onClick={() => this.props.getUser(this.props.userId)} >
                                     {/* <div  ><Image src={require(`../photo/${actor.attributes.image}`)} alt={actor.attributes.name}  roundedCircle   width={150} height={200} mode='fit' /></div> */}
                                     <Image src={actor.attributes.image_url} alt={actor.attributes.name} roundedCircle   width={150} height={200} mode='fit'/>
                                      <Link onClick={() => this.props.actorId(parseInt(actor.id))} to={`/actors/${actor.id}`}>{actor.attributes.name}</Link>
                                      <ButtonForFavorite   /> 
                                   </div>
                               </Col>
                              </Row>             
                        </Container>
                    )}
                    <SearchBar  search={this.state.search} handleSearchChange={this.handleSearch}  />
                </div>
              
            )
      }
    }
const msp = (state) => {
    return {
        actors: state.actors.actors, 
        userId: state.users.userId
    }
}
const mdp = dispatch => {
    return {     
        actorId: (id) =>  dispatch({type: 'FIND_ACTOR', payload: id}),
        getUser: (id) => dispatch({ type: "GET_USER", payload: id})
     }
}
export default connect(msp, mdp)(Actors)

