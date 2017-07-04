import * as actionTypes from '../../constants/actionTypes';


export function fetch_ColorChangeHandler(param){
     return (dispatch,getState) => {
     	const url = "http://localhost:3000/colorCollection";
     	dispatch({
     		type:actionTypes.CHANGE_COLOR_REQUEST
     	})
     	fetch(url).then(response => response.json())
     		.then(data => dispatch({
     			type:actionTypes.CHANGE_COLOR_SUCCESS
     			,response:data
     		}))
     		.catch(e => dispatch({
     			type:actionTypes.CHANGE_COLOR_FAILURE
     			,message:e
     		}))

     }	
}
