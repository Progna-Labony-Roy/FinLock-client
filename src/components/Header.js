import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link className='nav-links' to="/home">Home</Link>
            <Link className='nav-links' to="/">Sign In</Link>
        </div>
    );
};

export default Header;