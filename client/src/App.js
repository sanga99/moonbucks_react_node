import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/user';
import './App.css';

class App extends Component {


  render(){
    return (

      <div> 
        <main> 
          <Router>
            <Switch>
              <Route exact path="/login" component={ LoginPage }/>
              {/* <Route component={NotFound}/> */}
            </Switch>
          </Router>
        </main>
      </div>
    );
   }
}

export default App;
