import React, { Component } from 'react';
import './UserPage.css';
import { Link } from 'react-router-dom';
import readingsService from '../../utils/readingService';
import userService from '../../utils/userService';

export default class UserPage extends Component {
    state = {
        prevReadings: [],
        user: userService.getUser()
    }

    async componentDidMount(){
        let userId = this.state.user._id;
        const prevReadings = await readingsService.userIndex(userId);
        console.log('this is prev readings------------', prevReadings)
        this.setState({ prevReadings: prevReadings })
    }

    render() {
        const readingDetailBtns = this.state.prevReadings.map(function (reading, idx) {
            return(
            <div className='pastReading-list'>
                <div id={idx + 1} key={idx + 1}>
                {reading.createdAt}
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='/profile/readingdetail' className='ProfilePage-PastReadingLink'>Reading Detail</Link>
                </div>
                <br/>
            </div>
            )
        })
        
        return (
            <div className='UserPage'>
                <Link to='/' className='FiveCardLovePage-link'>Home</Link>
                <br />
                <h1>{this.state.user.name}</h1>
                <h3>Past Readings:</h3>
                {readingDetailBtns}
            </div>
        )
    }
}
