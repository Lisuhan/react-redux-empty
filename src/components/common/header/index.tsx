import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className="demo">
                        <Link to="/Home">home</Link>
                    </li>
                    <li className="demo">
                        <Link to="/Demo">demo</Link>
                    </li>
                    <li className="demo">
                        <Link to="/Demo2">demo2</Link>
                    </li>
                    <li className="demo">
                        <Link to="/Demo3">demo3</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
