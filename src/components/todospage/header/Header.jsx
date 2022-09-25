import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./Header.module.css";
import { logout } from '../../../store/actions';
import { clearState } from '../../../store/actions';

export default function Header() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const complited = state.todos.filter(item => item.status === true).length;

    return (
            <header className={style.header}>
                    <div className={style.userCompleted}>
                        <p className={style.name}>{state.user.name}</p>
                        <p>| Completed {complited} / {state.todos.length}</p>
                    </div>
                    <button 
                        className={style.buttonLogout} 
                        onClick={() => {
                            dispatch(logout)
                            dispatch(clearState)
                        }}>
                        Log Out
                    </button>
            </header>
    )
}
