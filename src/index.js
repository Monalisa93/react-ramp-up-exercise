import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk';
import ErrorBoundary from './components/ErrorBoundary'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(allReducers)}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
