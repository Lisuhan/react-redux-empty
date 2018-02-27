import React,{Component} from "react"
import { connect } from "react-redux"
import ColorChange from "&/components/ColorChange"
import Actions from "&/redux/actions/index"
import Immutable from "immutable"
import { bindActionCreators } from "redux"
//路由下的App文件
class Demo extends Component {
    render() {
        return <ColorChange {...this.props} />
    }
}
const mapStateToProps = state => ({
    data: state.colorChange.toJS(),
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
