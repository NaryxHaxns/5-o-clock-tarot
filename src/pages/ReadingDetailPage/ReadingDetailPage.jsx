import React, { useState } from 'react';
import './ReadingDetailPage.css';
import { Link } from 'react-router-dom';
import ModalCardDetail from '../../components/ModalCardDetail/ModalCardDetail'
import ReflectionForm from '../../components/ReflectionForm/ReflectionForm';

const ReadingDetailPage = (props) => {
    let readingId = window.location.pathname.split('/')[3]
    let reading = [];
    let readingDate = '';

    const [isShowing, setIsShowing] = useState(false);
    const [currentCard, setCurrentCard] = useState({});
    
    props.prevReadings.map(function (cards){
        if(cards._id === readingId){
            reading = cards.reading;
            readingDate = cards.createdAt;
        }
        return reading;
    })
    
    const handleClick = (card) => {
        setCurrentCard(card)
        setIsShowing(true);
    }
    console.log(reading)
    return (
        <div className='ReadingDetailPage'>
            <Link to='/' className='ReadingDetailPage-link'>Home</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/profile' className='ReadingDetailPage-link'>Profile</Link>
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
                    CARD 3. What your partner brings to the
                    relationship.
            </p>
                <p>
                    CARD 4. Your partner's future desire in the
                    relationship.
            </p>
                <p>
                    CARD 5. Why you are together, which also
                    determines how long it may last and what you
                    can learn.
            </p>
                <p>
                    This is your reading from {readingDate}. You can
                    click a card below one at a time to see the card
                    that had been drawn in that given position.
                    Consider the description of the card, the divinatory
                    meanings, and the position it appeared in the spread
                    based on the list above. Below you can leave Reflections
                    on this reading. This is an opportunity to journal
                    what you feel the cards are telling you. These will
                    be logged by date so that you may look back on
                    your prior Reflections and see how accurate you or
                    the cards were as things came to pass.
            </p>
            </div>
            <br />
            <div className='cardLayout'>
                {reading.map(function (card, idx) {
                    const showHideClassName = currentCard._id === card._id && isShowing ? 'display-block' : 'display-none';

                    return (
                        <div id={`card_${idx + 1}`} key={`card_${idx + 1}`}>
                            {idx + 1}
                            <div className='tarotCard' style={{ backgroundImage: `url(${card.image})` }}></div>
                            <div className={showHideClassName}>
                                <ModalCardDetail
                                    card={card}
                                    setIsShowing={setIsShowing}
                                />
                            </div>
                            <button onClick={() => handleClick(card)}>Card Details</button>
                        </div>
                    )
                })}
            </div>
            <br/>
            <div className='ReflectionsLayout'>
                <h1>Reflections</h1>
                <div className='Reflections-list'>
                    
                </div>
                <ReflectionForm />
            </div>
        </div>
    )
}

export default ReadingDetailPage;