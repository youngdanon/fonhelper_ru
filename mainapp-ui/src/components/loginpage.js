import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import Context from "../context";

export default function LoginForm() {
    let [login, setLogin] = useState('')
    let [password, setPassword] = useState('')
    let [rawLogin, setRawLogin] = useState(false)
    let [rawPassword, setRawPassword] = useState(false)
    let [loginError, setLoginError] = useState('Логин не может быть пустым')
    let [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    let [authError, setAuthError] = useState('')
    let [formValid, setFormValid] = useState(false)

    let {auth} = useContext(Context)

    useEffect(() => {
        setFormValid(!(loginError || passwordError))

    }, [loginError, passwordError])

    function blurHandler(e) {
        switch (e.target.name) {
            case 'login':
                setRawLogin(true)
                break
            case 'password':
                setRawPassword(true)
                break
        }
    }

    function loginHandler(e) {
        if (e.target.value) {
            setLoginError("")
        } else {
            setLoginError("Логин не может быть пустым")
        }
        setLogin(e.target.value)
    }

    function passwordHandler(e) {
        if (e.target.value) {
            setPasswordError("")
        } else {
            setPasswordError("Пароль не может быть пустым")
        }
        setPassword(e.target.value)
    }


    function submitHandler() {
        axios({
            method: 'POST',
            url: '/api/login/',
            data: {"login": login, "password": password}
        }).then(response => {
            if (!response.data) {
                setLogin("")
                setPassword("")
                setAuthError("Неверный логин или пароль")
            } else {
                auth(response.data)
            }
        })
    }

    return (
        <div className='login-form'>
            <h1>Вход</h1>
            <h4 className='text-muted'>Для доступа к функциям сервиса необходимо авторизоваться</h4>
            <div className='login form-item'>
                {(rawLogin && loginError) && <div className='error'>{loginError}</div>}
                <input onChange={(e) => loginHandler(e)} value={login}
                       onBlur={(e) => blurHandler(e)}
                       name='login' type="text" placeholder='Логин'/>
            </div>
            <div className='password form-item'>
                {(rawPassword && passwordError) && <div className='error'>{passwordError}</div>}
                <input onChange={(e) => passwordHandler(e)} value={password}
                       onBlur={(e) => blurHandler(e)}
                       name='password' type="text" placeholder='Пароль'/>
            </div>
            {authError ? <div className='error'>{authError} </div> : ""}
            <button onClick={submitHandler} type="submit" disabled={!formValid}>Войти</button>
        </div>
    )


}