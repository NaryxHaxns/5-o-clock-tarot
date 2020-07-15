import React from 'react';
import './FiveCardLovePage.css';
import { Link } from 'react-router-dom';

const FiveCardLovePage = () => (
    <div className='FiveCardLovePage'>
        <Link to='/' className='FiveCardLovePage-link'>Home</Link>
        <h1>5-Card Love Spread</h1>
        <div>
            <p>
                This five-card spread offers several perspectives on
                the quality of a love relationship.
            </p>
            <p>
                CARD 1. What you bring to the relationship.
            </p>
            <p>
                CARD 2. Your future desire in the relationship.
            </p>
            <p>
                CARD 3. What your partner brings to the relationship.
            </p>
            <p>
                CARD 4. Your partner's future desire in the relationship.
            </p>
            <p>
                CARD 5. Why you are together, which also determines how long it may last and what you can learn.
            </p>
        </div>
        <div className='cardLayout'>
            <div id='one'>
                1
                <p className='tarotCard'></p>
            </div>
            <div id='two'>
                2
                <p className='tarotCard'></p>
            </div>
            <div id ='three'>
                3
                <p className='tarotCard'></p>
            </div>
            <div id ='four'>
                4
                <p className='tarotCard'></p>
            </div>
            <div id ='five'>
                5
                <p className='tarotCard'></p>
            </div>
        </div>
    </div>
)

export default FiveCardLovePage;