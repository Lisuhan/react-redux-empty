import React,{ Component, PureComponent} from 'react';

export default class Parent extends Component {
	render(){
		return (
			<div>
				<ChildOne></ChildOne>
				<ChildTwo></ChildTwo>
			</div>
		)
	}
}

class ChildOne extends PureComponent {
	render(){
		return <div>

			</div>
	}
}

class ChildTwo extends PureComponent {
	handleClick = e => {

	}
	render(){
		return <button onClick = {this.handleClick}>点击</button>
	}
}
