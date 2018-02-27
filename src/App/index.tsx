import React from "react"
import Header from "&/components/common/header"

import "./base.scss"
import "../style/index.css"
//app入口
const App = (props:any) => {
    return (
        <div className="container">
            <Header />
            <section>{props.children}</section>
        </div>
    )
}

export default App
