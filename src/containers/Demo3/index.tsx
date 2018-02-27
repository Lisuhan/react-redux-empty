import React, { Component } from "react"
import ImageShow from "&/components/imageShow/imageShow"

//路由下的App文件
class Demo3 extends Component<{}, {}> {
    constructor(props: any) {
        super(props)
    }
    render(): JSX.Element {
        return (
            <div>
                <ImageShow />
            </div>
        )
    }
}

export default Demo3
