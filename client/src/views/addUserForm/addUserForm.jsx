import React, { Component } from "react"
import Navbar from "../../components/navbar/navbar"
import Form from "../../components/form/form"
import './addUserForm.css'

export default class AddUserForm extends Component {
    render() {
        return(
            <section className="user-form-section">
                <Navbar/>
                <Form/>
            </section>
        )
    }
}