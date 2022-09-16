import React from 'react';
import style from "./StartPage.module.css";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authorization } from '../../store/actions';

export default function StartPage() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <form className={style.form} onSubmit={() => dispatch(authorization(userName, email))}>
                <div className={style.formContainer}>
                    <div>
                        <label className={style.label} htmlFor='email'>User Name</label><br/>
                        <input className={style.input} id="name" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <label className={style.label}  htmlFor='email'>Email</label><br/>
                        <input className={style.input} id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className={style.buttonSubmit}>LOG IN</button>
                </div>
            </form>
        </div>
    )
}
