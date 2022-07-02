import React from 'react';
import '../css/Header.css';
import Navbar from './Navbar';

function Header() {
    return (
        <div className="header">
            <Navbar />
            <div className="header__text">
                <h1>Fitness <span className="header__colorText">With</span>Naveen</h1>
            </div>
            <div className="header__button">
                <button>Join Now</button>
            </div>
        </div>
    )
}

export default Header
