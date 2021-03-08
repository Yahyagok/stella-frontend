const initialState = {
        comments: [],
        commentId: ''
}
export default function commentReducer(prevState=initialState, action ){
    switch(action.type){
            case 'FETCH_COMMENTS':
                    return {...prevState, comments: action.payload.data}
            case 'ADD_COMMENT':
                    return  {...prevState, comments: [...prevState.comments, action.payload.data]}          
            case 'FIND_UPDATE_COMMENT':
                    let findUpdateComment = action.payload
                    return { ...prevState, updateComment: findUpdateComment }
           case 'UPDATE_COMMENT': 
                  let commentId =  action.payload.id
                let newComments = prevState.comments.map(comment => {
                        if (comment.id === commentId  ) { 
                               comment = {...action.payload}
                                return { comment}
                        }
                        else { 
                                return comment
                        }
                })
                   return {...prevState, comments: newComments}
          case 'DELETE_COMMENT': 
                let commentDeletedId = action.payload  
                return { 
                        ...prevState, comments: prevState.comments.filter( (comment) => comment.id !==  commentDeletedId)  
                }       
           case 'FIND_COMMENT':   
                   let id = action.payload
                   return {...prevState, commentId: id }
            default:
                    return prevState             
    }
}


// whatever you do here , you aim to change the state