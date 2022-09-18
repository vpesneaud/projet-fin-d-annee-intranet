import React, { Component } from "react"
import "./form.css"
import { addNewUser, modifyUser } from '../../services/services'

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
        password: this.props.password,
        id: this.props.id
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
    
    sendForm = () =>{
        if (window.location.href.includes('add-user')) {
            addNewUser(this.state.userdata.token, this.state.gender, this.state.firstname, this.state.lastname, this.state.password, this.state.email, this.state.phone, this.state.birthdate, this.state.city, this.state.country, this.state.photo, this.state.service, this.state.isAdmin)
            .then(response => {
                console.log(response)
            })
        } else {
          console.log(this.state.userdata.id)
            modifyUser(this.state.userdata.token, this.state.id, this.state.gender, this.state.firstname, this.state.lastname, this.state.password, this.state.email, this.state.phone, this.state.birthdate, this.state.city, this.state.country, this.state.photo, this.state.service)
            .then(response => {
                console.log(response)
            })
        }
    }

    render() {
        return(
            <div className="user-form-container">
                <form className="form-modify-add-user">
                    <div>gender: <input type="text" value={this.state.gender} onChange={this.genderValue} placeholder="male / female"/></div>
                    <div>firstname: <input type="text" value={this.state.firstname} onChange={this.firstnameValue} placeholder="name"/></div>
                    <div>lastname: <input type="text" value={this.state.lastname} onChange={this.lastnameValue} placeholder="lastname"/></div>
                    {window.location.href.includes('add-user') && (<div>password: <input type="text" value={this.state.password} onChange={this.passwordValue}/></div>)}
                    <div>email: <input type="text" value={this.state.email} onChange={this.emailValue} placeholder="example@example.com"/></div>
                    <div>phone: <input type="text" value={this.state.phone} onChange={this.phoneValue} placeholder="01-02-03-04-05"/></div>
                    <div>birthdate: <input type="text" value={this.state.birthdate} onChange={this.birthdateValue} placeholder="YYYY/MM/DD"/></div>
                    <div>city: <input type="text" value={this.state.city} onChange={this.cityValue} placeholder="Paris, Marseille..."/></div>
                    <div>country: <input type="text" value={this.state.country} onChange={this.countryValue} placeholder="France"/></div>
                    <div>photo: <input type="text" value={this.state.photo} onChange={this.photoValue} placeholder="https://..."/></div>
                    <div>service: <input type="text" value={this.state.service} onChange={this.serviceValue} placeholder="Technique / Client/ Marketing"/></div>
                    {window.location.href.includes('add-user') && (<div>isAdmin: <input type="text" value={this.state.isAdmin} onChange={this.isAdminValue} placeholder="true / false"/></div>)}
                </form>
                {window.location.href.includes('add-user') ? (<div className="add-user-btn" onClick={this.sendForm}>Ajouter</div>)
                 :
                 (<div className="add-user-btn" onClick={this.sendForm}>Modifier</div>)}
            </div>
        )
    }
}