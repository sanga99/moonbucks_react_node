import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Index} from 'react-router';
import { Home }  from './pages/base';
import Header from './pages/base/HeaderPage';
import Footer from './pages/base/FooterPage';
import './App.css';

class App extends Component {


  render(){
    return (

      <div>
        <nav>
         <Header />
        </nav>
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route component={NotFound}/> */}
            </Switch>
          </Router>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
   }
}

export default App;
