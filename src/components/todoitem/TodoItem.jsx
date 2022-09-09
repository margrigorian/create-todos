import React from 'react';
import style from "./TodoItem.module.css";
// import { memo } from 'react';

export default function TodoItem(props) {
  return (
    <div>
        <div className={style.todoElContainer}>
            <input className={style.checkbox} type="checkbox" checked={props.todo.status} onChange={() => {props.dispatch({type: "change status", index: props.index})}} />
            <p className={style.text} onDoubleClick={() => props.dispatch({type: "delete element", index: props.index})}>{props.todo.text}</p>
        </div>
    </div>
  )
}

// export default memo(TodoItem);