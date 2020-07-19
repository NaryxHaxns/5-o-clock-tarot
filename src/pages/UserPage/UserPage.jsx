import React from 'react';
import './UserPage.css';
import { Link } from 'react-router-dom';

const UserPage = (props) => {
        const readingDetailBtns = props.prevReadings.map(function (reading, idx) {
            return(
                <div className='pastReading-listItem' id={idx + 1} key={idx + 1}>
                {reading.createdAt}
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to={`/profile/readingdetail/${props.prevReadings[idx]._id}`} className='ProfilePage-PastReadingLink'>Reading Detail</Link>
                </div>
            )
        })
        
        return (
            <div className='UserPage'>
                <Link to='/' className='FiveCardLovePage-link'>Home</Link>
                <br />
                <h1>{props.user.name}</h1>
                <h3>Past Readings:</h3>
                <div className='pastReading-list'>
                    {readingDetailBtns}
                </div>
            </div>
        )
}

export default UserPage;