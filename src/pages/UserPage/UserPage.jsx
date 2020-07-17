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
            {console.log(props.user.pastReadings)}
            {props.user.pastReadings.length < 1 ? 
                <h4>
                    No readings to date. Why not have your
                    tarot read?
                </h4>
            :
                props.user.pastReadings.map(function (reading, idx) {
                    return(
                        <div id={`reading_${idx + 1}`} key={`reading_${idx + 1}`}>
                            {reading[1]}
                            <button>Go to Reading</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
)

export default UserPage;