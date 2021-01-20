export function fetchAgencies(){
    return (dispatch) => { 
     fetch('http://localhost:3000/api/v1/agencies')
     .then(res => res.json())
     .then(agencies => dispatch({
         type: 'FETCH_AGENCIES', 
         payload: agencies
     
     }))
     }
    
 }