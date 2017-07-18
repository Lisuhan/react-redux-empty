import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import App from './containers/App/App';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';

const rootReducer = combineReducers(reducers);
const store = createStore(
	rootReducer,				//reducers
	applyMiddleware(thunk)      //中间件
);

//路由跳转
const getPageBundle = (pageName) => {
  const first = pageName.substring(0,1).toUpperCase();
  const end = pageName.substring(1, pageName.length);
  const pages = first + end;
  return require("./containers/" + pages + '/index');
}

const rootConfig = {
	path:'/',
	childRoutes:[{
		path:'*',
		getComponents(nextState,callback){
			debugger
		}
	}]
}


const Dom = document.getElementById('content');
/*<Provider store = {store}>
	  	<Router
            routes={rootConfig}
            history={browserHistory} >
            <App/>
		</Router>
	</Provider>
*/
render(
	<Provider store = {store}>
            <App/>
	</Provider>,
	Dom
)

