import React from "react"
import { connect } from "react-redux"
import ColorChange from "./component/ColorChange"
import Actions from "./store"
import { bindActionCreators } from "redux"
//路由下的App文件
const Demo = (props: any) => {
    return <ColorChange {...props} />
}

const mapStateToProps = (state: any) => ({
    data: state.colorChange.toJS(),
})
const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(Actions, dispatch),
})

export default connect<any>(mapStateToProps, mapDispatchToProps)(Demo)
