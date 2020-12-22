export const addActor = (data) => {
 
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/actors',  {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ actor: { name: data.name, image: data.image, contact_info: data.contactInfo, city_id: data.cityId, agency_id: data.agencyId, description: data.description } })
        })
        .then(response => response.json())
        .then(actor => dispatch({ type: 'ADD_ACTOR', payload: actor }))
    }
    
}