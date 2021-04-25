import axios from 'axios'
export function loginUser () {
    return (dispatch) => {
        fetch('http://localhost:3000/logged_in', {withCredentials: true})
        .then(response => response.json())
        .then(response => {
            if (response.data.logged_in) {
              handleLogin(response)
            } else {
              handleLogout()
            }
          })
          .catch(error => console.log('api errors:', error))
        }   
    }
