export const addActor = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/actors',  {
            method:'POST',
            // body: JSON.stringify({ actor: { name: data.name, image: data.image, contact_info: parseInt(data.contactInfo), city_id: parseInt(data.cityId), agency_id: parseInt(data.agencyId), description: data.description } })
             body:   data     
        })
        .then(response => response.json())
        .then(actor => dispatch({ type: 'ADD_ACTOR', payload: actor }))
    }   
}
// actor: { name: data.name, imageUrl: data.file, contact_info: data.contactInfo, city_id: data.cityId, agency_id: data.agencyId, description: data.desctription }