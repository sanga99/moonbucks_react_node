import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFoundPage, LoginPage, RegisterPage, AdminHomePage, OwnerHomePage} from './pages';
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
              <Route path="/not" component={NotFoundPage}/>
              {/* Not Found 파일 이것으로 해결하기
                 <Route component={NotFoundPage}/> */}
            </Switch>
          </Router>
        </main>
      </div>
    );
   }
}

export default App;
