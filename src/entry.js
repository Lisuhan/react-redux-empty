import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import App from './containers/App';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers(reducers);
const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

const dom = document.getElementById('content');
render(
	<Provider store = {store}>
		<App/>
	</Provider>,
	dom
)

