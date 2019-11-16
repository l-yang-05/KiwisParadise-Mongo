import React, { useState } from 'react';

// Passing state from parent component (Contacts pg component)
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onInputChange = (e) => {
        setEmail(e.target.value)
        setPassword(e.target.value)
    }

    const loginSubmit = (e) => {
        e.preventDefault()

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