import React from 'react';
import ReactDOM from 'react-dom';
import Goods from './containers/Goods'
import Layout from './containers/Layout'
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers/Reducers'
import {browserHistory} from 'react-router'
import {Router, Route} from 'react-router'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {syncHistoryWithStore} from 'react-router-redux'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(

    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path="/" component={Goods} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")

);
registerServiceWorker();
