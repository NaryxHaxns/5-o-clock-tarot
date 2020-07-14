import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='' onClick={props.handleLogout} className='NavBar-link'>Log Out</Link>
    </div>
    :
    <div>
        <Link to='/login' className='NavBar-link'>Log In</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>Sign Up</Link>
    </div>;

    return(
        <div className='NavBar'>
            {nav}
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Link to='/about' className='NavPage-link'>History & About</Link>
            <br/><br/><br/><br/><br/><br/>
            <Link to='/about' className='NavPage-link'>Profile</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/about' className='NavPage-link'>Tarot Reading</Link>
        </div>
    );
};

export default NavBar;