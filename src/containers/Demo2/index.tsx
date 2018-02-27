import React, { Component, PureComponent } from "react"

export default class Parent extends Component {
    render() {
        return (
            <div>
                <ChildOne />
                <ChildTwo />
            </div>
        )
    }
}

class ChildOne extends PureComponent {
    render() {
        return <div />
    }
}

class ChildTwo extends PureComponent {
    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {}
    render() {
        return <button onClick={this.handleClick}>点击</button>
    }
}
