import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render(){
    return (
      <header id="header-region">
        <h2>
            <Link to="/">Lsh</Link>
        </h2>
        <nav role="navigation">
            <ul className="nav navbar-nav">
                <li className="home"><Link to="/home">home</Link></li>
                <li className="demo"><Link to="/demo">demo</Link></li>
            </ul>
        </nav>
      </header>
    )
  }
}