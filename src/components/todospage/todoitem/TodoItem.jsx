import React from 'react';
import style from "./TodoItem.module.css";
import { useState } from 'react';
import { changeStatus, deleteEl } from '../../../store/actions';
import ModalDescription from '../modalDescription/ModalDescription';

// import { memo } from 'react';

export default function TodoItem({todo, index, dispatch}) {
  const [descriptionWindow, setDescription] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div>
        <div className={style.todoElContainer}>
            <input className={style.checkbox} type="checkbox" checked={todo.status} onChange={() => {dispatch(changeStatus(index))}} />
            <p className={style.text} onDoubleClick={() => dispatch(deleteEl(index))}>{todo.text}</p>
            <p 
              className={style.descriptionButton} 
              onClick={() => {
                setDescription(!descriptionWindow)}
              }>
              {descriptionWindow ? "Close description" : "Open description"}
            </p>
        </div>
        {descriptionWindow&&
          <div className={style.description}>
            <p>
              {todo.description}
            </p>
            <button className={style.buttonChangeDescription} onClick={() => setModal(true)}>Change</button>
          </div>
        }

        {modal&& <ModalDescription todo={todo} index={index} dispatch={dispatch} setModal={setModal}/>}
    </div>
  )
}

// export default memo(TodoItem);