import React from 'react'
import httpClient from '../httpClient'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
    state = {
        fields: { name: '', email: '', password: '' }
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
        httpClient.signUp(this.state.fields).then(user => {
            this.setState({ fields: { name: '', email: '', password: '' } })
            if (user) {
                this.props.onSignUpSuccess(user)
                this.props.history.push('/')
            }
        })
    }

    render() {
        const { name, email, password } = this.state.fields
        return (
            <div className='container-contact'>
                <h1>Sign Up</h1>
                <div className="form-wrapper">
                    <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>

                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Name" name="name" value={name} />

                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Email" name="email" value={email} />

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" name="password" value={password} />

                        <button type="submit">Sign Up</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default SignUp