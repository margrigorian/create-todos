import React, { useState, useReducer }  from 'react';
import style from "./List.module.css";
import TodoItem from '../todoitem/TodoItem';
// import { useCallback } from 'react';

export default function List() {
    const [inputText, setInputText] = useState("");
    const [elelmentsArr, dispatch] = useReducer(reducer, []);

    // НЕ МОГУ ВЫЗВАТЬ В REDUCE ИЛИ ОТПРАВИТЬ ЧЕРЕЗ PROPS В TodoItem, НЕ РАБОТАЕТ
    // const changeStatus = useCallback(() => {
        // return state.map((item, i) => i === action.index ? {status: item.status === false ? true : false, text : item.text} : item);
        // ИЛИ
        // return dispatch({type: "change status"});
    // }, [])

    function reducer(state, action) {
        switch(action.type) {
            case "add" :
                return [...state, {status: false, text: inputText}];
            case "change status" :
                return state.map((item, i) => i === action.index ? {status: item.status === false ? true : false, text : item.text} : item);
            case "delete element" :
                return state.filter((item, i) => i !== action.index);
            case "clear completed":
                return state.filter(item => item.status !== true)
            default:
                return state = [];
        }
    }


    return (
        <div className={style.container}>
            <p className={style.headerText}>TODOS</p>
            <div className={style.containerContent}>
                <div>
                    <input  className={style.input} value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <button className={style.buttonAdd} onClick={() => dispatch({type: "add"})}>Add</button>
                </div>
                <div className={style.containerList}>
                    {elelmentsArr.map((item, i) => <TodoItem key={`TodoId-${i}`} todo={item} index={i} dispatch={dispatch} />)}
                </div>
                {elelmentsArr.length !== 0 && 
                    <div className={style.buttonContainer}>
                        <button className={style.buttonClear} onClick={() => dispatch({type: "clear completed"})}>Clear completed</button>
                        <button className={`${style.buttonClear} ${style.clearAll}`} onClick={() => dispatch({type: "clear all"})}>Clear all</button>
                    </div>}
            </div>
        </div>
    )
}
