import React,{ Component } from 'react';


//路由下的App文件
class App extends Component {
	state = {
		visable : false
	}
	constructor(props) {
        super(props);
    }
    handleClick = event => {
    	this.setState({
    		visable:true
    	})
    }
    hide = () => {
    	this.setState({
    		visable:false
    	})
    }
	render () {
		const {visable} = this.state;
		return (
			<Box visable = {visable} hide = {this.hide} >
				<button onClick = {this.handleClick}>button</button>
			</Box>
		)
	}

}

class Box extends Component {

	constructor(props){
		super(props);
		console.log('子组件实例化')
	}
	componentWillMount(){
	    const {hide }=this.props;
	    document.addEventListener('click',this.onClick,true);
	    console.log('载入')
	}
	componentWillUnmount(){
	    console.log('卸载');
	}
	onClick = () => {
		this.props.hide();
	}
	render(){
		const {visable} = this.props;
		const display = visable ? 'block':'none';
		return (
			<div>
				{this.props.children}
				<div style = {{display:display}} onClick={this.onClick}>00000</div>
			</div>
			

		)
		
	}

}
export default App;