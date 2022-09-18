import React, { Component } from "react"
import Navbar from "../../components/navbar/navbar"
import Form from "../../components/form/form"
// import './addUserForm.css'
import { getCoworker } from "../../services/services"

export default class ModifyUserForm extends Component {

    state = {
        userData: JSON.parse(sessionStorage.getItem('user')),
        modifyUserData: ''
    }

    componentDidMount() {
        console.log(this.state.userData.token, window.location.href.match(/\d+$/))
        getCoworker(this.state.userData.token, window.location.href.match(/\d+$/)).then(response => {
            console.log(response)
            this.setState({
                modifyUserData: response
            })
        })
    }

    render() {
        return(
            <section className="user-form-section">
                <Navbar/>
                {this.state.modifyUserData !== '' && (
                    <Form
                    id={this.state.modifyUserData.id}
                    gender={this.state.modifyUserData.gender}
                    firstname={this.state.modifyUserData.firstname}
                    lastname={this.state.modifyUserData.lastname}
                    email={this.state.modifyUserData.email}
                    phone={this.state.modifyUserData.phone}
                    birthdate={this.state.modifyUserData.birthdate}
                    city={this.state.modifyUserData.city}
                    country={this.state.modifyUserData.country}
                    photo={this.state.modifyUserData.photo}
                    service={this.state.modifyUserData.service}
                   />
                )}
            </section>
        )
    }
}