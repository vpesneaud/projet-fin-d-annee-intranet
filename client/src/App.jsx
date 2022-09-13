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
      <div className=""> 
        <form action="">
          <input 
          type="text" 
          placeholder='ex: vpesneaud@gmail.com' 
          onChange={this.emailValue}/>

          <input 
          type="text" 
          onChange={this.passwordValue}/>

          <div 
          onClick={this.onLogin}>send
          </div>

          <p>
          owen.lopez@example.com owen.lopez
          </p>
          
        </form>
      </div>
    )
  }
}
