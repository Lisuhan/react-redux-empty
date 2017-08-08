import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Bundle from './utils/bundle';
import App from './App';
import Demo from './containers/Demo';
// import Home from './containers/Home';

const rootReducer = combineReducers(reducers);
const store = createStore(
    rootReducer, //reducers
    applyMiddleware(thunk) //middleware
);


class RoutePage extends React.Component{

    constructor(props){
        super(props)
    }
    getPageBundle = (pageName) => {
        const first = pageName.substring(0,1).toUpperCase();
        const end = pageName.substring(1,pageName.length);
        const pages = first + end;
        return require('./containers/' + pages );
    }
    render(){
        const { match} = this.props;
        const pageName = match.params.route;
        const pageComponent = pageName && this.getPageBundle(pageName);
        return (
            <App>
               <Bundle load={pageComponent}>
                    {Component => <Component />}
               </Bundle>
            </App>
        )
    }
}


// const routeConfig = [{
//     path:'/',
//     component:App,
//     routes:[
//         {
//             path:'/demo',
//             exact:true,
//             component:Demo
//         },{
//             path:'/home',
//             component:Home
//         }   
//     ]
// }]


ReactDOM.render(
	<Provider store = {store}>
        <Router>
            <Switch>
                <Route path="/"  exact component={App}/>
                <Route path="/:route" component={RoutePage}/>
            </Switch>
        </Router>
	</Provider>,
	document.getElementById('content')
)
