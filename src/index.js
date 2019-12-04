import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ActionCableProvider } from 'react-actioncable-provider'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/reducer';


const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
<ActionCableProvider url="ws://localhost3000/cable">
    <Provider store={store}> 
        <App /> 
    </Provider>
</ActionCableProvider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
