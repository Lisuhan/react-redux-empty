import React ,{Component} from 'react'
import Header from '../components/common/header'
import Demo from '../containers/Demo';
//app入口
class App extends Component {

	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="container">
				<Header/>
				{this.props.children}
			</div>
		)
	}

}



export default App;