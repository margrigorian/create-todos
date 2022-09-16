import React from 'react';
import style from "./TodoItem.module.css";
import { changeStatus, deleteEl } from '../../../store/actions';
// import { memo } from 'react';

export default function TodoItem({todo, index, dispatch}) {
  return (
    <div>
        <div className={style.todoElContainer}>
            <input className={style.checkbox} type="checkbox" checked={todo.status} onChange={() => {dispatch(changeStatus(index))}} />
            <p className={style.text} onDoubleClick={() => dispatch(deleteEl(index))}>{todo.text}</p>
        </div>
    </div>
  )
}

// export default memo(TodoItem);