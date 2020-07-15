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
            <Link to='/about' className='NavPage-AboutLink'>History & About</Link>
            <br/>
            <Link to='/about' className='NavPage-ProfileLink'>Profile</Link>
            <Link to='/tarot' className='NavPage-TarotLink'>Tarot Reading</Link>
        </div>
    );
};

export default NavBar;