import React from 'react';
import './ModalDelete.css';

const ModalDelete = ({ reflection, handleModalDelete }) => {
    return(
        <div className='modalDelete-main'>
            <button onClick={() => handleModalDelete(reflection)}> Remove Reflection</button>
        </div>
    )
}

export default ModalDelete;