export const ADD_TODO = 'ADD_TODO';
export const SET_FILTER = 'SET_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const Filter = {
	SHOW_ALL:'SHOW_ALL',
	SHOW_DONE:'SHOW_DONE',
	SHOW_ACTIVE:'SHOW_ACTIVE'
}

function add_todo(text){
	return { type:ADD_TODO,text}
}
function toggle_todo(index){
	return { type:TOGGLE_TODO,index}
}
function delete_todo(index){
	return { type:DELETE_TODO,index}
}
function filter_todos(filter){
	return { type:SET_FILTER ,filter}
}




export function addTodo(options){
    return add_todo(options);	
}
export function toggleTodo(options){
    return toggle_todo(options);
}
export function deleteTodo(options){
    return delete_todo(options);
}
export function filterTodos(options){
    return filter_todos(options);
}