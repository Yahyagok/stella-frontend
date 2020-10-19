import React from 'react'

import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'


class CommentsContainer extends React.Component {

    render () {
        return (
            <div>
                <CommentInput />
                <Comments comments={this.props.actor && this.props.actor.relationships.comments.data}/>
            </div>
        )
    }

}

export default CommentsContainer 