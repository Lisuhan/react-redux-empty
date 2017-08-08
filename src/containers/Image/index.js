import React,{ Component } from 'react';
import Actions from '../../redux/actions/index';
import PropTypes from 'prop-types';
import ImageShow from '../../components/image/imageShow';
 

//路由下的App文件
class App extends Component {
	constructor(props) {
        super(props);
    }
	render () {
		return (
			<div>
				<ImageShow>
					
				</ImageShow>
			</div>
		)
	}

}

export default App;