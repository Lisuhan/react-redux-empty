import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import './image.scss';

class imageShow extends Component {

	constructor(props){
		super(props);
	}

	render(){
		
		return (
			<div  className="imageShow" style={{width:'600px',height:'600px'}}></div>
		)
	}
}
export default imageShow;