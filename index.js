import React from 'react';
import reactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Promise from 'promise-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App/App';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import {rootReducer} from './redux/reducers'
import Comp from "./components/Comp/Comp";
import thunk from 'redux-thunk'

injectTapEventPlugin();

if (!window.Promise) {
    window.Promise = Promise;
}

let store = createStore(rootReducer, applyMiddleware(thunk));

reactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="test" component={Comp}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root'));
