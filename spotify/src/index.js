import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import {Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {reducer} from './reducers/index';
// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>, document.getElementById('root'));






const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(

    // <App/>,

 <Provider store= {store}>
<App />
</Provider>
,

document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();