const initialState = {
    agencies:[],
  
}
export default function agencyReducer(prevState=initialState, action ){
    switch(action.type){  
            case 'FETCH_AGENCIES': 
                    return  {...prevState, agencies: action.payload.data}         
            default:
                    return prevState                  
    }
}