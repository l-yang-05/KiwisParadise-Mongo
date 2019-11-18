import React, { useState } from 'react';
import httpClient from '../httpClient';

// Passing state from parent component (Contacts pg component)
const Login = () => {
    const [fields, setFields] = useState({ user: '', password: '' })

    const onInputChange = (e) => {
        setFields({ user: e.target.name, password: e.target.value })
    }

    const loginSubmit = (e) => {
        e.preventDefault()
        httpClient.login(fields)
            .then(user => {
                setFields({ user: '', password: '' })
                if (user) {

                }
            })

    }

    return (
        <div >
            <h3>Login</h3>
            <form>


            </form>
        </div>
    )
}

export default Login;