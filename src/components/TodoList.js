import React,{ Component,PropTypes } from 'react' 
import TodoItem from './TodoItem'
class TodoList extends Component {
	render(){
		return(
			<ul>{
				this.props.todoList.map((item,index)=>
					<TodoItem {...item} key={index} toggleTodoItem = {() => this.props.toggleTodoItem(index)} deleteHandler = {() => this.props.deleteHandler(index)}/>   //onClick = {this.props.onClick(index)}区别
				)
			}
			</ul>
		)
	}
}
TodoList.propTypes = {
	toggleTodoItem:PropTypes.func.isRequired,
	todoList:PropTypes.arrayOf(PropTypes.shape({
		done:PropTypes.string.isRequired,title:PropTypes.string.isRequired
	}).isRequired).isRequired,
	filterState:PropTypes.string.isRequired
}
export default TodoList;