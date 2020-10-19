import React from 'react';
import { connect} from 'react-redux';
import ActorsContainer from './containers/ActorsContainer'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <ActorsContainer />
      </div>
      )
  }
}



export default connect()(App);

// second argument of connect can be mapDispatchToProps or action function itself
//if we use action function itself , we need to import thta file   
