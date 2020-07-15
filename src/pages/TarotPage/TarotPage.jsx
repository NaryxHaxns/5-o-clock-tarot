import React from 'react';
import './TarotPage.css';
import { Link } from 'react-router-dom';

const Tarot = (props) => (
    <div className='TarotPage'>
        <Link to='/' className='TarotPage-link'>Home</Link>
        <br/><br/>
        <h1>Choose your Reading:</h1>
        <br/><br/>
        <Link to='/tarot/fivecardlove' className='TarotPage-FiveLoveLink'>5-Card Love Spread</Link>
    </div>
)

export default Tarot;