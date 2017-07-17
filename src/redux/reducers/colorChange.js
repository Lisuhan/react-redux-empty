import * as actionsTypes from '../../constants/actionTypes';
import Immutable from 'immutable';

let defaultState = Immutable.fromJS({
	isFetching:false,
    color: 'red'
});

export default function Color(state = defaultState, action){

	let { type } = action;
	
	switch(type){
		case actionsTypes.CHANGE_COLOR_REQUEST:
			return state.update('isFetching',()=>{return true});
		case actionsTypes.CHANGE_COLOR_SUCCESS:
			const colorCollection = action.response;
			const color = colorCollection[Math.ceil(Math.random() * colorCollection.length)];
			return state.update('color', () => {return color}).update('isFetching',()=>{return false});
		case actionsTypes.CHANGE_COLOR_FAILURE:
			return state;
		default:
			return state;
	}
}