import React,{ Component , PropTypes } from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
//import { addTodo ,toggleTodo ,deleteTodo ,filterTodos} from '../redux/actions'
import * as todoActions from '../redux/actions'


// 装饰器
class App extends Component {
	constructor(props) {
        super(props);
    }
	render () {
		const {todos} = this.props;
		return (
			<div>
				<AddTodo addTodoHandler={text => this.props.addTodo(text)}/>   
				<TodoList todoList = {todos} 
				toggleTodoItem = {index => this.props.toggleTodo(index)} deleteHandler={index => this.props.deleteTodo(index)}/>
				<Footer onClick={filter => this.props.filterTodos(filter)}/>
			</div>
		)
	}

}
const getVisibleTodos = (state) => {
  switch (state.filter) {
    case 'SHOW_ALL':
      return state.todos
    case 'SHOW_DONE':
      return state.todos.filter(t => t.done)
    case 'SHOW_ACTIVE':
      return state.todos.filter(t => !t.done)
    default:
      return state.todos
  }
}

const mapStateToProps = (state) => ({
  	todos: getVisibleTodos(state)
})

export default connect(mapStateToProps,{...todoActions})(App);