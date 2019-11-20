import React from 'react'
import httpClient from '../httpClient'

class LogIn extends React.Component {
    state = {
        fields: { email: '', password: '' }
    }

    onInputChange(evt) {
        this.setState({
            fields: {
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }

    onFormSubmit(evt) {
        evt.preventDefault()
        httpClient.logIn(this.state.fields).then(user => {
            this.setState({ fields: { email: '', password: '' } })
            if (user) {
                this.props.onLoginSuccess(user)
                this.props.history.push('/')
            }
        })
    }

    render() {
        const { email, password } = this.state.fields
        return (
            <div className="container-auth">
                <h1>Log In</h1>
                <div className="form-auth login">
                    <form id="form-val" onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Email" name="email" value={email} />
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" name="password" value={password} />
                        <button type="submit" className="button-auth">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LogIn