import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import App from './App';
import Demo from './containers/Demo';
import Home from './containers/Home';

const rootReducer = combineReducers(reducers);
const store = createStore(
    rootReducer, //reducers
    applyMiddleware(thunk) //middleware
);


const routeConfig = [{
    path:'/',
    component:App,
    routes:[
        {
            path:'/demo',
            exact:true,
            component:Demo
        },{
            path:'/home',
            component:Home
        }   
    ]
}]


ReactDOM.render(
	<Provider store = {store}>
        <Router>
            {renderRoutes(routeConfig)}
        </Router>
	</Provider>,
	document.getElementById('content')
)
