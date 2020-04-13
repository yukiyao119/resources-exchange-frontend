import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { ActionCableProvider } from 'react-actioncable-provider'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers/reducer';
import 'semantic-ui-css/semantic.min.css'

// const store = createStore(reducer, applyMiddleware(thunk))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
    <Provider store={store}> 
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </Provider>
 ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
