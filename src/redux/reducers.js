import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER, Filter } from './actions'
import { combineReducers } from 'redux'


const { SHOW_ALL } = Filter

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    title: action.text,
                    done: false
                }
            ]
        case TOGGLE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    done: !state[action.index]['done']
                }),
                ...state.slice(action.index + 1)
            ]
        case DELETE_TODO:
            {
            return state.filter((item,_index)=>{
            	if(action.index!==_index){
            		return item
            	}
            })
		}

        default:
            return state
    }
}

function filter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}
const todoApp = combineReducers({
    todos,
    filter
})

export default todoApp;
