import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className="nav-right">
            <Link to={'/email'} className="link-style">Email</Link>&nbsp;&nbsp;
            <Link to={'/password'} className="link-style">Password</Link>&nbsp;&nbsp;
            <Link to={'/timezones'} className="link-style">Timezone</Link>
        </div>
    );
};

export default Nav;
