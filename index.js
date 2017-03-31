// import React from 'react'
import React, {Component, PropTypes } from 'react'
import {render,findDOMNode} from 'react-dom'

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
		let val = findDOMNode(this.refs.addTodo).value;
		this.props.addTodoHandler(val);
	}
}

AddTodo.propTypes = {
	addTodoHandler:PropTypes.func.isRequired
}

///////////////////////// 添加



class TodoItem extends Component {
	//todoListItem
	render(){
		return (
			<li onClick = {this.props.onClick} style = {{textDecoration:this.props.done == true ? 'line-through' : 'none'}}>{this.props.title} <button onClick ={this.delelteHandler.bind(this)}>Delete</button></li>
		)
	}
	delelteHandler(e){
		 e.stopPropagation();
		 this.props.delelteHandler();
		 
	}
}
TodoItem.propTypes = {
	onClick:PropTypes.func.isRequired,
	done:PropTypes.bool.isRequired,
	title:PropTypes.string.isRequired,
	delelteHandler:PropTypes.func.isRequired
}
class TodoList extends Component {
	render(){
		const todoList = this.props.todoList;
		const filterState = this.props.filterState;
		let filterData = [];
		switch(filterState){
			case 'show_all':
				filterData = todoList;break;
			case 'show_finished':
				filterData=todoList.filter(t => t.done);break;
			case 'show_active':
				filterData= todoList.filter(t=> !t.done);break;
			default:
				filterData = todoList;break;
		}
		return(
			<ul>{
				filterData.map((item,index)=>
					<TodoItem {...item} key={index} onClick = {() => this.props.onClick(index)} delelteHandler = {() => this.props.delelteHandler(index)}/>   //onClick = {this.props.onClick(index)}区别
				)
			}
			</ul>
		)
	}
}
TodoList.propTypes = {
	onClick:PropTypes.func.isRequired,
	todoList:PropTypes.arrayOf(PropTypes.shape({
		done:PropTypes.string.isRequired,title:PropTypes.string.isRequired
	}).isRequired).isRequired
}

///////////////////////////////todos列表






class Footer extends Component {
	render(){
		return(
			<div>
				<a href="javascript:void(0);" onClick={() => this.props.onClick('show_all')}>All </a>
				<a href="javascript:void(0);" onClick={() => this.props.onClick('show_finished')}>Finished </a>
				<a href="javascript:void(0);" onClick={() => this.props.onClick('show_active')}>Active </a>
			</div>

		)
	}
}
///////////////////////////////页脚显示与隐藏
Footer.propTypes = {
	onClick:PropTypes.func.isRequired
}




class App extends Component {
// 	function ReactComponent(props, context, updater) {
//   this.props = props;
//   this.context = context;
//   this.refs = emptyObject;
//   // We initialize the default updater but the real one gets injected by the
//   // renderer.
//   this.updater = updater || ReactNoopUpdateQueue;
// }

	constructor(props) {
        super(props);
        this.state = {
			todoList:[{done:true,title:'aaa'},{done:false,title:'bbb'},{done:true,title:'ccc'},{done:false,title:'ddd'}]
			,filterState:'show_all'
		}
    }
    addTodoHandler(text){
    	const state = this.state;
    	const newState = Object.assign({},state,{todoList:[...state.todoList,{'title':text,'done':false}]});		
    	this.setState(newState);
    }
    toggleTodoItem(index){
    	const state = this.state;
    	const newState = Object.assign({},state,{todoList:state.todoList.map((todoListItem,_index)=>{
    		if(index===_index){
    			return Object.assign({},todoListItem,{
    				done:!todoListItem.done
    			})
    		}
    		return todoListItem;
    	})});		
    	this.setState(newState);
    }
    filterStateHandler(filterState = 'show_all'){
    	this.setState({"filterState":filterState});	
    }
    delelteHandler(index){
    	this.state.todoList.splice(index,1);
    	this.setState({todoList:this.state.todoList});
    }
	render () {
		return (
			<div>
				<AddTodo addTodoHandler={text => this.addTodoHandler(text)}/>
				<TodoList todoList={this.state.todoList} filterState={this.state.filterState} onClick = {index => this.toggleTodoItem(index)} delelteHandler = {index => this.delelteHandler(index)}/>
				<Footer onClick = {filterState => this.filterStateHandler(filterState)}/>
			</div>
		)
	}
}

render(
	<App/>, 
document.getElementById('content')
)
