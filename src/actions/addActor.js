export const addActor = (data) => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/actors', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(actor => dispatch({ type: 'ADD_ACTOR', payload: actor }))
    }
    
}