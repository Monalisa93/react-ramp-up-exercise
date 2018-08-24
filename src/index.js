import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(allReducers)}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
