export function fetchCities(){
    return (dispatch) => { 
     fetch('http://localhost:3000/api/v1/cities')
     .then(res => res.json())
     .then(cities => dispatch({
         type: 'FETCH_CITIES', 
         payload: cities
     
     }))
     }
    
 }