import React,{ Component } from 'react';
import { connect } from 'react-redux';
import ColorChange from '../../components/ColorChange';
import Actions from '../../redux/actions/index';
import Immutable from 'immutable';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
 

//路由下的App文件
class App extends Component {
	constructor(props) {
        super(props);
    }
	render () {
		return (
			<div>
        		<ColorChange {...this.props}/>
			</div>
		)
	}

}
const mapStateToProps = (state) => ({
  	data:state.colorChange.toJS()
 })
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
})

App.propTypes = {
	
}

export default connect(mapStateToProps,mapDispatchToProps)(App);