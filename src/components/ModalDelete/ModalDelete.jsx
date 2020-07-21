import React from 'react';
import './ModalDelete.css';

const ModalDelete = ({ reflection, date, handleModalDelete, setIsShowing }) => {
    return(
        <div>
            <section className='modal-main'>
                <h3>Are you sure you want to delete the reflection from {date}?</h3>
                <br/>
                <button onClick={() => handleModalDelete(reflection)}> Remove Reflection</button>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <button onClick={() => setIsShowing(false)}>Cancel</button>
            </section>
        </div>
    )
}

export default ModalDelete;