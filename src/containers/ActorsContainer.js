import React from 'react';
import Actors from '../components/Actors';
import ActorInput from '../components/ActorInput'


import { Route, Switch} from 'react-router-dom'



class ActorsContainer extends React.Component {

    render(){
       
        return (
            <div>
                <Switch>   
                    <Route exact path='/new' component={ActorInput}/>
            
                    <Route exact  path='/actors'  render={(routerProps) => <Actors {...routerProps} actors={this.props.actors}/>}/> 
                
                </Switch> 
            </div>
        )
    }
}

export default ActorsContainer