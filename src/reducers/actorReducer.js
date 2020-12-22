const initialState = {
        actors:[],
        actorId: ''
}


export default function actorReducer(prevState=initialState, action ){
        switch(action.type){  
                case 'FETCH_ACTORS': 
                        return  {...prevState, actors: action.payload.data}         
                case 'ADD_ACTOR':
                        return {...prevState, actors: [...prevState.actors, action.payload.data ]}
                case 'FIND_ACTOR':   
                        let id = action.payload
                        return {...prevState, actorId: id }
                default:
                        return prevState                  
        }
}


// what is a reducer really 
// you define action type and , it takes prev state, and action , it will update the reducer 

// state mostly is it gonna be object , 
// I really think that , it is best way to make an object, 
// dispatch(actionObj) , automatically passed prev state as the first argument 
// personally i belive state would be object 
// 