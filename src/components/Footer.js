import React,{ Component,PropTypes } from 'react' 

class Footer extends Component {

	render(){
		return(
			<div>
				<a href="javascript:void(0);" onClick={() => this.props.onClick('SHOW_ALL')}>All </a>
				<a href="javascript:void(0);" onClick={() => this.props.onClick('SHOW_DONE')}>Finished </a>
				<a href="javascript:void(0);" onClick={() => this.props.onClick('SHOW_ACTIVE')}>Active </a>
			</div>

		)
	}
}



export default Footer