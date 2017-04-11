import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux' 
import App from './containers/App'
import todoApp from './redux/reducers'

const store = createStore(todoApp);
console.log(store.getState())
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

const elem = document.getElementById('content');
render(
	<Provider store = {store}>
		<App/>
	</Provider>,
	elem
)
