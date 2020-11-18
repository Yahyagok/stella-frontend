import React from 'react'
// import { Link } from 'react-router-dom'

const Like= (props) => {
 

    return (   
        <div>
            Likes: {props.likes && props.likes.length}
        </div>
    )
}
export default Like
