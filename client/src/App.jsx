import React, { Component } from "react"
import './App.css'
import { loginData } from './services/services'
import { setMainUser } from "./features/mainUser"
import { store } from "./app/store"
import { withRouter } from "./withRouter"

class App extends Component {

  state = {
    email: '',
    password: '',
  }

  emailValue = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  passwordValue = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  onLogin = (event) => {
    loginData(this.state.email, this.state.password).then(response => {
      sessionStorage.setItem('user', JSON.stringify(response))
      store.dispatch(setMainUser(response))
      this.props.navigate('/home');
      }
    )
  }

  render() {
    return (
      <section className="login-landing-container">
        <h1>la plateforme qui vous permet de découvrir vos collaborateurs</h1>
        <div className="login-form-container"> 
          <form action="" className="login-form">

            <h1>INtranet</h1>

            <input 
            type="text" 
            placeholder='ex: vpesneaud@gmail.com' 
            onChange={this.emailValue}
            className="login-input"/>
            

            <input 
            type="password" 
            onChange={this.passwordValue}
            className="login-input"/>

            <div 
            className="send-button"
            onClick={this.onLogin}>Se connecter
            </div>

            <p>
            owen.lopez@example.com owen.lopez
            </p>

            <p>
            admin@admin.com admin
            </p>
            
          </form>
        </div>
      </section>
    )
  }
}

export default withRouter(App);