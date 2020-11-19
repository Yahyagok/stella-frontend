import React from 'react';
import Actors from '../components/Actors';
import ActorInput from '../components/ActorInput'
import { connect} from 'react-redux';
import { fetchActors } from '../actions/fetchActors'
import { Route, Switch} from 'react-router-dom'
import Actor from '../components/Actor';

class ActorsContainer extends React.Component {
    componentDidMount(){
            this.props.fetchActors()
        
    }
    render(){
        console.log(this.props)
        return (
            <div>
                <Switch>   
                    <Route exact path='/new' component={ActorInput}/>
                    <Route  path='/actors/:id' render={(routerProps ) => <Actor {...routerProps} actors={this.props.actors} loggedInUser={this.props.loggedInUser} />}/>
                    <Route exact  path='/actors'  render={(routerProps) => <Actors {...routerProps} actors={this.props.actors}/>}/> 
                    </Switch> 
            </div>
        )
    }
}
const mapStateToProps = (state) => { 
    return  {
        actors: state.actors
    }
}
export default connect(mapStateToProps, { fetchActors })(ActorsContainer)