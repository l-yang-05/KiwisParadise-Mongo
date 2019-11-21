import React from 'react';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import httpClient from './httpClient';
import NavBar from './Components/NavBar';
import LogIn from './Components/Login';
import LogOut from './Components/Logout';
import SignUp from './Components/Signup';
import User from './Components/Admin/User'
import Home from './Components/Home'
import Products from './Components/Products'
import Contacts from './Components/Contact'
import Footer from './Components/Footer'

class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() }

  onLoginSuccess(user) {
    this.setState({ currentUser: httpClient.getCurrentUser() })
  }

  logOut() {
    httpClient.logOut()
    this.setState({ currentUser: null })
  }

  render() {
    const { currentUser } = this.state
    return (
      <div>
        <React.Fragment >
          <BrowserRouter>

            <NavBar currentUser={currentUser} />
            <Switch>

              <Route path="/login" render={(props) => {
                return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
              }} />

              <Route path="/logout" render={(props) => {
                return <LogOut onLogOut={this.logOut.bind(this)} />
              }} />

              {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
              <Route path="/signup" render={(props) => {
                return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
              }} />

              <Route path="/products" render={() => {
                return <Products />
              }} />

              <Route path="/contacts" render={() => {
                return <Contacts />
              }} />

              <Route path='/users' render={() => {
                return currentUser
                  ? <User />
                  : <Redirect to="/login" />
              }}
              />

              <Route path="/" component={Home} />

            </Switch>
          </BrowserRouter>
          <Footer />
        </React.Fragment>
      </div>
    )
  }
}

export default App