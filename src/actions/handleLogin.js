export function handleLogin(){
    axios.post('http://localhost:3000/login', {user}, {withCredentials: true})
      .then(response => {
        // console.log(response)
        if (response.data.logged_in) {
          props.handleLogin(response.data)
          props.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
 }

 // how would I add props to action , or this will stay on Login js 


//  Login(handlLoginFunction, ...) {
//      handleLoginFunction(response.data)
//  }