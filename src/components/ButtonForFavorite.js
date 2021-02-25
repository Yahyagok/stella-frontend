import React from 'react' 
class ButtonForFavorite extends React.Component { 
    state = { 
        count: 0 
    }
 handleFavorite = () => { 
    if (this.state.count === 0 ){ 
        this.setState({count: this.state.count + 1  })
    }
    else if (this.state.count > 0 ) { 
        this.setState({ count: -1  })
    } 
    else if (this.state.count === -1 ) { 
        this.setState({ count: 1 }) 
    }
}    
    render() { 
        return (
        <div onClick={this.handleFavorite}> 
           <button> Like or Dislike: {this.state.count} </button> 
        </div>

    
        )
    } 
}  
export default ButtonForFavorite
