import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'
import actorReducer from './reducers/actorReducer'
import { BrowserRouter as Router} from 'react-router-dom'

import App from './App';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(actorReducer,composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
    <Provider store={store}>
        <Router>
              <App />
        </Router>
     </Provider>
     ,
     document.getElementById('root'));

     //let store stores the data globally 
     // reducer which despatches , what we wanna do with the store 
     // we are sending action abject to our reducer , taking actiong object deciding what we want to update , return new version of that store 


