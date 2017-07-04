import React ,{Component,PropTypes} from 'react'

class ColorChange extends Component {
	//添加todo
	constructor(props,context){
		super(props,context);
	}
	render(){

		const style = {
			width:'200px',
			height:'200px',
			backgroundColor:this.props.data.color
		}
		const {isFetching} = this.props.data;
		return (
			isFetching ? 
			<span>Loading...</span> :
			<div>
				<div style={style}></div>
				<button onClick ={::this.changeColorHandler}>changeColor</button>
			</div>
		)
	}
	changeColorHandler(e){
		//this.props.addTodoHandler();
		this.props.actions && this.props.actions.fetch_ColorChangeHandler();
	}
}

// ColorChange.propTypes = {
// 	fetch_ColorChangeHandler:PropTypes.func.isRequired
// }

export default ColorChange;