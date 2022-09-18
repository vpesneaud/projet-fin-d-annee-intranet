import React, { Component } from "react"
import "./form.css"
import { addNewUser } from '../../services/services'

export default class Form extends Component {

    state = {
        userdata: JSON.parse(sessionStorage.getItem('user')),
        gender: this.props.gender,
        firstname: this.props.firstname,
        lastname: this.props.lastname,
        email: this.props.email,
        phone: this.props.phone,
        birthdate: this.props.birthdate,
        city: this.props.city,
        country: this.props.country,
        photo: this.props.photo,
        service: this.props.service,
        isAdmin: this.props.isAdmin,
        password: this.props.password
    }

    genderValue = (event) => {
        this.setState({
          gender: event.target.value
        })
      }
    
    firstnameValue = (event) => {
        this.setState({
            firstname: event.target.value
        })
      }

    lastnameValue = (event) => {
        this.setState({
            lastname: event.target.value
        })
      }

    passwordValue = (event) => {
        this.setState({
            password: event.target.value
        })
      }   

    emailValue = (event) => {
        this.setState({
          email: event.target.value
        })
      }

    phoneValue = (event) => {
        this.setState({
            phone: event.target.value
        })
      }
      
    birthdateValue = (event) => {
        this.setState({
            birthdate: event.target.value
        })
      } 
    cityValue = (event) => {
        this.setState({
            city: event.target.value
        })
      } 
      
    countryValue = (event) => {
        this.setState({
            country: event.target.value
        })
      } 
      
    photoValue = (event) => {
        this.setState({
            photo: event.target.value
        })
      }
      
    serviceValue = (event) => {
        this.setState({
            service: event.target.value
        })
      }
      
    isAdminValue = (event) => {
        this.setState({
            isAdmin: event.target.value
        })
      }  

      componentDidMount() {
          console.log(this.props, this.state.userdata.token)
      }

      componentDidUpdate() {
          console.log(this.state)
      }
    
    sendForm = () =>{
        if (window.location.href.includes('add-user')) {
            addNewUser(this.state.userdata.token, this.state.gender, this.state.firstname, this.state.lastname, this.state.password, this.state.email, this.state.phone, this.state.birthdate, this.state.city, this.state.country, this.state.photo, this.state.service, this.state.isAdmin)
            .then(response => {
                console.log(response)
            })
        }
    }

    render() {
        return(
            <div className="user-form-container">
                <form className="form-modify-add-user">
                    <div>gender: <input type="text" value={this.props.gender} onChange={this.genderValue}/></div>
                    <div>firstname: <input type="text" value={this.props.firstname} onChange={this.firstnameValue}/></div>
                    <div>lastname: <input type="text" value={this.props.lastname} onChange={this.lastnameValue}/></div>
                    {window.location.href.includes('add-user') && (<div>password: <input type="text" value={this.props.password} onChange={this.passwordValue}/></div>)}
                    <div>email: <input type="text" value={this.props.email} onChange={this.emailValue}/></div>
                    <div>phone: <input type="text" value={this.props.phone} onChange={this.phoneValue}/></div>
                    <div>birthdate: <input type="text" value={this.props.birthdate} onChange={this.birthdateValue}/></div>
                    <div>city: <input type="text" value={this.props.city} onChange={this.cityValue}/></div>
                    <div>country: <input type="text" value={this.props.country} onChange={this.countryValue}/></div>
                    <div>photo: <input type="text" value={this.props.photo} onChange={this.photoValue}/></div>
                    <div>service: <input type="text" value={this.props.service} onChange={this.serviceValue}/></div>
                    <div>isAdmin: <input type="text" value={this.props.isAdmin} onChange={this.isAdminValue}/></div>
                </form>
                {window.location.href.includes('add-user') ? (<div className="add-user-btn" onClick={this.sendForm}>Ajouter</div>)
                 :
                 (<div className="add-user-btn" onClick={this.sendForm}>Modifier</div>)}
            </div>
        )
    }
}