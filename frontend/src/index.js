import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducers from './reducers/user.reducer';
// import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducers);

console.log(store.getState());



ReactDOM.render(
    <Provider store= {store}>
         {/* <BrowserRouter> */}
             <App />
         {/* </BrowserRouter> */}
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
