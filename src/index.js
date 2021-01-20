import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'
import actorReducer from './reducers/actorReducer'
import commentReducer from './reducers/commentReducer'
import { BrowserRouter as Router} from 'react-router-dom'
import { combineReducers } from "redux";
import App from './App';
import likeReducer from './reducers/likeReducer'
import userReducer from './reducers/userReducer'
import cityReducer from './reducers/cityReducer'
import agencyReducer from './reducers/agencyReducer'
import { Route} from 'react-router-dom'



const rootReducer = combineReducers( { 
    actors: actorReducer, 
    comments: commentReducer,
    likes: likeReducer,
    users: userReducer,
    cities: cityReducer,
    agencies: agencyReducer
   })

// export default rootReducer;



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))




ReactDOM.render(
    <Provider store={store}>
        <Router>
           <Route  component={App} />
             
             
        </Router>
     </Provider>
     ,
     document.getElementById('root'));

     //let store stores the data globally 
     // reducer which despatches , what we wanna do with the store 
     // we are sending action abject to our reducer , taking actiong object deciding what we want to update , return new version of that store 
     // Browser router gives acsees to app interface with the browser , and have that navigate us to different pages like /movies ,like /movies/1  


