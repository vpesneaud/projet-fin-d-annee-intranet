import React, { Component } from "react"
import './navbar.css'
import { Link } from "react-router-dom"

export default class Navbar extends Component {

    state = {
        userData: JSON.parse(sessionStorage.user)
    }

    render() {
        return (
            <nav>
                <div>
                    <h1>INtranet</h1>
                </div>
                <div className="navbar-div-right">

                { this.state.userData.user.isAdmin === true && (
                    <Link to="/ajouter-collaborateur">
                        <p>Ajouter</p>
                    </Link>
                )}

                <Link to="/collaborateurs">
                    <p>
                        Liste
                    </p>
                </Link>

                <img src={this.state.userData.user.photo} alt="user profile picture" className="profile-picture-navbar"/>

                <Link to="/">
                    <p>
                        se deconnecter
                    </p>
                </Link>

                </div>
            </nav>
        )
    }
}