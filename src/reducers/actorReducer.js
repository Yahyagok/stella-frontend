export default function actorReducer(state = [], action ){
        switch(action.type){
                case 'FETCH_ACTORS':
                        return action.payload.data
                case 'ADD_ACTOR':
                        return [...state, action.payload.data] 
                default:
                        return state                  
        }
}


// what is a reducer really 
// you define action type and , it takes prev state, and action , it will update the reducer 

// state mostly is it gonna be object , 
// I really think that , it is best way to make an object, 
// dispatch(actionObj) , automatically passed prev state as the first argument 
// personally i belive state would be object 
// 