import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore , combineReducers , applyMiddleware , compose} from 'redux'
import {Provider} from 'react-redux'
import CounterReducer from './store/reducers/counter';
import ResultReducer from './store/reducers/result';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
//import reducer from './store/person/reducer';
const rootReducer = combineReducers({
    ctr : CounterReducer,
    res : ResultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('MiddleWare Dispatching ', action);
            const result = next(action);
            console.log('MiddleWare State' , store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer , composeEnhancers(applyMiddleware(logger , thunk)));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


//provider is used to connect react with redux store