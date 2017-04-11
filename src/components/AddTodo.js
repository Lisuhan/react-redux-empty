import React ,{Component,PropTypes} from 'react'
import { findDOMNode} from 'react-dom'

class AddTodo extends Component {
	//添加todo
	render(){
		return (
			<div>
				<input type='text' ref='addTodo'/>
				<button onClick = { e => this.addTodoHandler(e) }>addTodo</button>
			</div>
		)
	}
	addTodoHandler(e){
		const node = this.refs.addTodo;
		this.props.addTodoHandler(node.value);
		node.value = '';
	}
}

AddTodo.propTypes = {
	addTodoHandler:PropTypes.func.isRequired
}

export default AddTodo