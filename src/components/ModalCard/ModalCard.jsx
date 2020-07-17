import React from 'react';
import './ModalCard.css';

const ModalCard = ({ showHideModal, card }) => {
    let cardView = card.isReversed ?
    <div>
        <h3>{card.nameReversed}</h3>
        <p>{card.arcana}</p>
        <img src={card.imageReversed} alt="Card Image" className='modalCardImg'/>
        <p>{card.meaningReversed}</p>
        <p>{card.description}</p>
    </div>
    :
    <div>
        <h3>{card.name}</h3>
        <p>{card.arcana}</p>
        <img src={card.image} alt="Card Image" className='modalCardImg'/>
        <p>{card.meaning}</p>
        <p>{card.description}</p>
    </div>;
    
    return(
        <div>
            <section className='modal-main'>
                {cardView}
                <button onClick={() => showHideModal(card)}>Close</button>
            </section>
        </div>
    )
}

export default ModalCard;