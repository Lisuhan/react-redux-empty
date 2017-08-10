import React ,{Component} from 'react'
import Header from '../components/common/header'
// import Demo from '../containers/Demo';
// import { renderRoutes } from 'react-router-config';
import './base.scss';
import '../style/index.css';
//app入口
class App extends Component {

	constructor(props){
		super(props);
	}
	render(){
		// debugger
		return (
			<div className="container">
				<Header/>
				<section>{this.props.children}</section>
			</div>
		)
	}

}



export default App;