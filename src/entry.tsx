import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageProxy from 'utils/pageProxy';
import App from './App';

const rootReducer = combineReducers(reducers);
const store = createStore(
    rootReducer, //reducers
    applyMiddleware(thunk) //middleware
);


ReactDOM.render(
	<Provider store = {store}>
        <Router>
            <Switch>
                <Route path="/"  exact component={App}/>
                <Route path="/:route" component={PageProxy}/>
            </Switch>
        </Router>
	</Provider>,
	document.getElementById('content')
)
