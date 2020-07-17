import React from 'react';
import './UserPage.css';
import { Link } from 'react-router-dom';

const UserPage = (props) => (
    <div className='UserPage'>
        <Link to='/' className='FiveCardLovePage-link'>Home</Link>
        <br/>
        <h1>{props.user.name}</h1>
        <h3>Past Readings:</h3>
        <div className='pastReading-list'>
            
        </div>
    </div>
)

export default UserPage;