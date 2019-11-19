import React from 'react'


class LogOut extends React.Component {

    componentDidMount() {
        this.props.onLogOut()
    }

    render() {
        return window.location = "/login"
    }
}

export default LogOut