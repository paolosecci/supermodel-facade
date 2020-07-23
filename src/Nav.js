import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <h3>MySQL Supermodels</h3>
            <h5>in: {isLogged}</h5>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>User</li>
                </Link>
                <Link style={navStyle} to="/browse">
                    <li>Browse</li>
                </Link>
                <Link style={navStyle} to="/stage">
                    <li>Stage</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;