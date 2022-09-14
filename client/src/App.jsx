import React, { Component } from "react"
import './App.css'
import {loginData} from './services/services'


export default class App extends Component {

  state = {
    email: '',
    password: '',
  }

  emailValue = (event) => {
    console.log('value is:', event.target.value);
    this.setState({
      email: event.target.value
    })
    console.log(this.state)
  }

  passwordValue = (event) => {
    console.log('value is:', event.target.value);
    this.setState({
      password: event.target.value
    })
    console.log(this.state)
  }

  onLogin = (event) => {
    loginData(this.state.email, this.state.password).then(response => {
      localStorage.setItem('user', JSON.stringify(response))
      window.location.href='/home'
      }
    )  
  }

  componentDidMount() {
    window.localStorage.removeItem('user') 
  }

  componentDidUpdate() {
    if (window.localStorage.getItem('user')) {
      console.log('mon cul')
    } else {
      console.log('ma zeub')
    }
  }

  render() {
    return (
      <section className="login-landing-container">
        <div className="login-form-container"> 
          <form action="">

            <h1>INtranet</h1>

            <input 
            type="text" 
            placeholder='ex: vpesneaud@gmail.com' 
            onChange={this.emailValue}/>

            <input 
            type="password" 
            onChange={this.passwordValue}/>

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
