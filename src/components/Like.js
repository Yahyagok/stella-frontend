import React from 'react'
import {connect} from 'react-redux'
import {fetchLikes} from '../actions/fetchLikes'

class  Like  extends React.Component{

    componentDidMount ()  {
          this.props.fetchLikes() 
    }
    render(){
        let like = this.props.likes && this.props.likes.filter(like => like.attributes.actor &&  like.attributes.actor.id === parseInt(this.props.actorId)) 
        return (  
            <div>
                Likes: { like.length}
            </div>
        )
      }
    }

const msp = (state) => {
    return {
        likes: state.likes, 
        actorId: state.actors.actorId
    }
}
export default connect(msp, {fetchLikes})(Like)


