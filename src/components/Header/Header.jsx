import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='link' to='/'>Home</Link><Link className='link' to='/login'>Login</Link>
        </div>
    );
};

export default Header;