import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './App';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';
import { Router, IndexRoute ,browserHistory } from 'react-router';

const rootReducer = combineReducers(reducers);
const store = createStore(
    rootReducer, //reducers
    applyMiddleware(thunk) //middleware
);

//路由跳转
const getPageBundle = (pageName) => {
    const first = pageName.substring(0, 1).toUpperCase();
    const end = pageName.substring(1, pageName.length);
    const pages = first + end;
    return "./containers/" + pages + '/index';
}

const getRouteConfig = (options, getNextState) => {
    let routeConfig = {
        path: '/',
        childRoutes: [{
            path: '*',
            getComponent(nextState, callback) {
                try {
                    var pathName = nextState.location.pathname;
                    var pageName = pathName.indexOf("/") != -1 ? pathName.slice(1) : pathName;
                    var pageBundle = getPageBundle(pageName);
                } catch (e) {
                    return callback(e);
                }
               require.ensure([], function (require) {
                callback(null, require(pageBundle))
              })
            }
        }]
    }
    routeConfig = Object.assign(routeConfig, options);
    return routeConfig;
}

const routeConfig = getRouteConfig({
    component: App,
    indexRoute: {
        onEnter: (nextState, replace) => replace('/home')
    }
})

const Dom = document.getElementById('content');

ReactDOM.render(
	<Provider store = {store}>
        <Router
            routes={routeConfig}
            history={browserHistory}>
        </Router>
	</Provider>,
	Dom
)
