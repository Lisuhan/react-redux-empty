import React,{ Component,PropTypes} from 'react'

class TodoItem extends Component {
	//todoListItem
	constructor(){
		super();
	}
	render(){
		return (
			<li onClick = {this.props.toggleTodoItem} style = {{textDecoration:this.props.done == true ? 'line-through' : 'none'}}>{this.props.title} 
				<button onClick ={::this.deleteHandler}>Delete</button>
			</li>
		)
	}
	deleteHandler(e){
		 e.stopPropagation();
		 this.props.deleteHandler();	 
	}
}
// TodoItem.propTypes = {
// 	toggleTodoItem: PropTypes.func.isRequired,
// 	done: PropTypes.bool.isRequired,
// 	title: PropTypes.string.isRequired,
// 	deleteHandler: PropTypes.func.isRequired
// }
export default TodoItem;