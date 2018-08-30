import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="nav">
            <Link to={'/email'} className="nav-el">Email</Link>
            <Link to={'/password'} className="nav-el">Password</Link>
            <Link to={'/timezones'} className="nav-el">Timezone</Link>
        </div>
    );
};

export default Nav;
