import React from 'react';
import './Navbar.css'
const Navbar = ({ handleLoginClick }) => {
    const handleClick = () => {
        handleLoginClick();
    };
    return (
        <div className="Navbar">
            <div className="icon">
                <h1>Quotify</h1>
            </div>
            <div className="nav_buttons">
                <button className='sign_up'>Sign Up</button>
                <button className="login" onClick={handleClick}>Log In</button>
            </div>
        </div>
    );
}

export default Navbar;