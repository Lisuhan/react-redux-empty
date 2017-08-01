import React ,{Component} from 'react'
import Header from '../components/common/header'
import Demo from '../containers/Demo';
import { renderRoutes } from 'react-router-config';
import './base.scss';
//app入口
class App extends Component {

	constructor(props){
		super(props);
		
	}
	render(){
		const { route } = this.props;
		return (
			<div className="container">
				<Header/>
				<section>{renderRoutes(route.routes)}</section>
			</div>
		)
	}

}



export default App;