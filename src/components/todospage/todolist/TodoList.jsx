import React, { useState } from 'react';
import style from "./TodoList.module.css";
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../todoitem/TodoItem';
import { addTodo, clearCompleted, clearAll } from '../../../store/actions';

// import { useCallback } from 'react';

export default function TodoList() {
    const [inputText, setInputText] = useState("");
    const elementsArr = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // НЕ МОГУ ОТПРАВИТЬ ЧЕРЕЗ PROPS В TodoItem, НЕ РАБОТАЕТ
    // const changeStatus = useCallback(() => {
    // return dispatch({type: "change status"});
    // }, [])

    function add() {
        if(inputText !== "") {
            return dispatch(addTodo(inputText));
        }
    }

    return (
        <div className={style.container}>
            <p className={style.headerText}>TODOS</p>
            <div className={style.containerContent}>
                <div>
                    <input  className={style.input} value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <button className={style.buttonAdd} onClick={() => {
                        add();
                        setInputText("");
                    }}>Add</button>
                </div>
                <div className={style.containerList}>
                    {elementsArr.map((item, i) => <TodoItem key={`TodoId-${i}`} todo={item} index={i} dispatch={dispatch} />)}
                </div>
                {elementsArr.length !== 0 && 
                    <div className={style.buttonContainer}>
                        <button className={`${style.buttonClear} ${style.clearCompleted}`} onClick={() => dispatch(clearCompleted)}>Clear completed</button>
                        <button className={`${style.buttonClear} ${style.clearAll}`} onClick={() => dispatch(clearAll)}>Clear all</button>
                    </div>}
            </div>
        </div>
    )
}
