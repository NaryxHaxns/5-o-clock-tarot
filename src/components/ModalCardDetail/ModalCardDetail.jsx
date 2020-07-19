import React from 'react';
import './ModalCardDetail.css';

const ModalCardDetail = ({ showHideModalDetail, card }) => {
    return(
        <div>
            <section className='modal-main'>
                <div>
                    <h3>{card.name}</h3>
                    <p>{card.arcana}</p>
                    <img src={card.image} alt="Card Image" className='modalCardImg'/>
                    <p>{card.meaning}</p>
                    <p>{card.description}</p>
                </div>;
                <button onClick={() => showHideModalDetail(card)}>Close</button>
            </section>
        </div>
    )
}

export default ModalCardDetail;