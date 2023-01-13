import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link className='nav-links' to="/">Home</Link>
            <Link className='nav-links' to="/signin">Sign In</Link>
        </div>
    );
};

export default Header;