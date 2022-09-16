import { store } from "../../app/store"
import React, { Component } from "react"
import './cards.css'
import { Link } from "react-router-dom"

export default class Cards extends Component {

    state = {
        user: store.getState('mainUser')
    }

    render() {
        return (
            <div className="cards-wrapper">
                <img src={this.props.imgSRC} alt="" className="card-picture"/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.country}</p>
                    <a href={"mailto:" + this.props.email}>{this.props.email}</a>
                    <p>{this.props.phone}</p>
                    <p>{this.props.birthday}</p>
                    <div>
                    { this.state.user.mainUser.mainUser.user.isAdmin === true && (
                        <div className="admin-control-div">
                            <Link to={'/collaborateur/' + this.props.id} >
                            <p>modifier</p>
                            </Link>
                            <p>supprimer</p>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}