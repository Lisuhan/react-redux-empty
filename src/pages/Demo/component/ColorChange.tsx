import React, { Component } from 'react'

interface Props{
    data: any,
    actions: any
}
class ColorChange extends Component<Props, {}> {
    constructor(props: Props) {
        super(props)
    }

    render(): JSX.Element {
        const { colorCollection, isFetching } = this.props.data;
        const color = colorCollection[Math.ceil(Math.random() * (colorCollection.length - 1))]

        const style = {
            width: '200px',
            height: '200px',
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
    changeColorHandler = (e: React.MouseEvent<HTMLButtonElement>)=> {
        this.props.actions.fetch_ColorChangeHandler()
    }
    componentDidMount() {
        this.props.actions.fetch_ColorChangeHandler()
    }
}

export default ColorChange
