import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className="demo">
                        <Link to="/home">home</Link>
                    </li>
                    <li className="demo">
                        <Link to="/demo">demo</Link>
                    </li>
                    <li className="demo">
                        <Link to="/demo2">demo2</Link>
                    </li>
                    <li className="demo">
                        <Link to="/demo3">demo3</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
