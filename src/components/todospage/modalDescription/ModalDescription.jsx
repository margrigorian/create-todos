import React, { useState } from 'react';
import style from "./ModalDescription.module.css";
import { changeDescription } from '../../../store/actions';

export default function ModalDescription({todo, index, dispatch, setModal}) {
    const [newDescription, setNewDescription] = useState(todo.description);
   
    return (    
        <div className={style.containerModal}>
            <div className={style.modalWindow}>

                <textarea 
                className={style.changeTextarea} 
                value={newDescription} 
                onChange={(e) => setNewDescription(e.target.value)}>
                </textarea>
                
                <div className={style.buttonsContainer}>

                    <button 
                    className={style.modalButton} 
                    onClick={() => {
                        dispatch(changeDescription(index, newDescription))
                        setModal(false)
                    }}>
                    Add
                    </button>

                    <button 
                    className={style.modalButton} 
                    onClick={() => {
                        setModal(false)
                        setNewDescription(todo.description)
                    }}>
                    Cancel
                    </button>

                </div>
            </div>
        </div>    
    )
}
