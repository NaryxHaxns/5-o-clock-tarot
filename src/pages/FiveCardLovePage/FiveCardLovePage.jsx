import React from 'react';
import './FiveCardLovePage.css';
import { Link } from 'react-router-dom';
import ModalCard from '../../components/ModalCard/ModalCard'

const FiveCardLovePage = (props) => (
    <div className='FiveCardLovePage'>
        <Link to='/' className='FiveCardLovePage-link'>Home</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/profile' className='FiveCardLovePage-link'>Profile</Link>
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
            <button id='FiveCardLovePage-ReadingButton' onClick={props.handleFiveCardLove}>Get your Reading</button>
            <p>
                To begin, click Get your Reading above. You will
                then be able to click a card one at a time to see
                the card that has been drawn in that given position.
                Consider the description of the card, the divinatory
                meanings, and the position it appeared in the spread
                based on the list above. You will have an opportunity
                to reflect upon this reading on your profile page.
            </p>
        </div>
        <br />
        <div className='cardLayout'>
            {props.reading.map(function (card, idx) {
                const showHideClassName = card.show ? 'display-block' : 'display-none';
                let cardImg = 'https://i.imgur.com/xrYYOeo.jpg';

                if (card.isFlipped && card.isReversed) {
                    cardImg = card.imageReversed;
                } else if (card.isFlipped) {
                    cardImg = card.image;
                }

                return (
                    <div id={`card_${idx + 1}`} key={`card_${idx + 1}`} onClick={() => props.handleCardFlip(card)}>
                        {idx+1}
                        <div className='tarotCard' style={{ backgroundImage: `url(${cardImg})` }}></div>
                        <div className={showHideClassName}>
                            <ModalCard
                                card={card}
                                showHideModal={props.showHideModal}
                            />
                        </div>
                        <button onClick={() => props.showHideModal(card)}>Card Details</button>
                    </div>
                )
            })}
        </div>
</div>
)


export default FiveCardLovePage;