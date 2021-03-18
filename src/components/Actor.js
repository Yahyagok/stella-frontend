import React from 'react' 
import { Redirect} from 'react-router-dom'
import CommentInput from '../components/CommentInput'
import LikeInput from '../components/LikeInput'
import { connect } from 'react-redux'
// import Comment from '../components/Comment'
import CommentsContainer from '../containers/CommentsContainer'
import {  Container, Row, Col } from "react-bootstrap"
import Image from 'react-bootstrap/Image'

// import {SideBy} from '../styled'


const Actor = (props) => {
    let actor = props.actors.find(actor => actor.id === props.match.params.id)    
    return (   
        <div>
                <Container>
                     <Row>
                     <Col xs={6} md={4} flex-row>
                {actor ? null : <Redirect to='/actors'/> }
     {/* {actor.attributes.image && <div><Image src={require(`../photo/${actor.attributes.image}`)} alt={actor.attributes.name} roundedCircle  /></div>  }  */}
                             <div><Image src={actor.attributes.image_url} alt={actor.attributes.name}   roundedCircle   width={150} height={200} mode='fit'  /> </div>                    
                </Col>
                    </Row>
                </Container> 
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
        actorId: state.actors.actorId,
        actors: state.actors.actors,
        userId: state.users.userId
    }
}
// const mdp = dispatch => {
//     return {     
//         actorId: (id) =>  dispatch({type: 'FIND_ACTOR', payload: id})  
//      }
// }
export default connect(msp)(Actor)


