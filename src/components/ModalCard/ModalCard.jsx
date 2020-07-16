import React from 'react';
import './ModalCard.css';

const ModalCard = ({ props, handleClose }) => {
    const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';
    
    let cardView = props.card.isReversed ?
        <div className={showHideClassName}>
            <section className='modal-main'>
            <h3>{props.card.nameReversed}</h3>
            <p>{props.card.arcana}</p>
            <img src={props.card.imageReversed} alt="Card Image"/>
            <p>{props.card.meaningReversed}</p>
            <p>{props.card.description}</p>
            </section>
            <button onClick={handleClose}>Close</button>
        </div>
        :
        <div className={showHideClassName}>
            <section className='modal-main'>
            <h3>{props.card.name}</h3>
            <p>{props.card.arcana}</p>
            <img src={props.card.image} alt="Card Image"/>
            <p>{props.card.meaning}</p>
            <p>{props.card.description}</p>
            </section>
            <button onClick={handleClose}>Close</button>
        </div>;

    return(
        {cardView}
    )
}

export default ModalCard;