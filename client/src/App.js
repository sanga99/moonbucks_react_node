import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RegisterPage} from './pages/user/index';
import { LoginPage } from './pages/user/index';
import { AdminHomePage } from './pages/admin/index';
import './App.css';

class App extends Component {


  render(){
    return (

      <div> 
        <main> 
          <Router>
            <Switch>
              <Route path="/login" component={ LoginPage }/>
              <Route path="/register" component={ RegisterPage }/>
              <Route path="/adminHome" component={ AdminHomePage}/>
              {/* <Route component={NotFound}/> */}
            </Switch>
          </Router>
        </main>
      </div>
    );
   }
}

export default App;
