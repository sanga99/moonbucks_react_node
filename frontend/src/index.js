import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
// import { createStore } from 'redux';
import create from './store';
import reducers from './reducers/user.reducer';
// import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import * as serviceWorker from './serviceWorker';


const store = create();

console.log(store.getState());



ReactDOM.render(
    <Provider store= {store}>
         {/* <BrowserRouter> */}
             <App />
         {/* </BrowserRouter> */}
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
