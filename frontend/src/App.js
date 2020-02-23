import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RegisterPage, LoginPage } from './pages/user/index';
import { AdminHomePage } from './pages/admin/index';
import { OwnerHomePage } from './pages/owner/index';
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
              <Route path="/ownerHome" component={ OwnerHomePage}/>
              {/* <Route component={NotFound}/> */}
            </Switch>
          </Router>
        </main>
      </div>
    );
   }
}

export default App;
