import React, { Component } from "react"
import PropTypes from "prop-types"

class ColorChange extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { colorCollection, isFetching } = this.props.data,
            color =
                colorCollection[
                    Math.ceil(Math.random() * (colorCollection.length - 1))
                ]

        const style = {
            width: "200px",
            height: "200px",
            backgroundColor: color,
        }
        return isFetching ? (
            <span>Loading...</span>
        ) : (
            <div>
                <div style={style} />
                <button onClick={this.changeColorHandler}>changeColor</button>
            </div>
        )
    }
    changeColorHandler = e => {
        this.props.actions.fetch_ColorChangeHandler()
    }
    componentDidMount() {
        this.props.actions.fetch_ColorChangeHandler()
    }
}

export default ColorChange
