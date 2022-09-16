import React, { Component } from "react"
import "./form.css"

export default class Form extends Component {

    sendForm = () =>{
        if (window.location.href.includes('add-user')) {
            console.log('ouai')
        }
    }

    render() {
        return(
            <div className="user-form-container">
                <form className="form-modify-add-user">
                    <div>id: <input type="text" value={this.props.id}/></div>
                    <div>gender: <input type="text" value={this.props.gender}/></div>
                    <div>firstname: <input type="text" value={this.props.firstname}/></div>
                    <div>lastname: <input type="text" value={this.props.lastname}/></div>
                    <div>email: <input type="text" value={this.props.email}/></div>
                    <div>phone: <input type="text" value={this.props.phone}/></div>
                    <div>birthdate: <input type="text" value={this.props.birthdate}/></div>
                    <div>city: <input type="text" value={this.props.city}/></div>
                    <div>country: <input type="text" value={this.props.country}/></div>
                    <div>photo: <input type="text" value={this.props.photo}/></div>
                    <div>service: <input type="text" value={this.props.service}/></div>
                    <div>isAdmin: <input type="text" value={this.props.isAdmin}/></div>
                </form>
                <div className="add-user-btn" onClick={this.sendForm}>
                    Ajouter
                </div>
            </div>
        )
    }
}