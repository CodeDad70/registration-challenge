import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="nav-right">
            <Link to={'/email'} className="link-style">Your WatchList</Link>
            <Link to={'/password'} className="link-style">Your WatchList</Link>
            <Link to={'/timezone'} className="link-style">Your WatchList</Link>
        </div>
    );
};

export default Nav;
