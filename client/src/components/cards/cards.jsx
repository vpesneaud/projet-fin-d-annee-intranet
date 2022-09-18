import { store } from "../../app/store"
import React, { Component } from "react"
import './cards.css'
import { Link } from "react-router-dom"
import { removeUser } from "../../services/services"

export default class Cards extends Component {

    state = {
        user: store.getState('mainUser'),
        id: this.props.id
    }

     remove = () => {  
         removeUser(this.state.user.mainUser.mainUser.token, this.state.id).then(response => {
             console.log(response)
         })
         window.alert('un collaborateur a été supprimé')
     }

     componentDidUpdate() {
         if (this.state.id === undefined) {
             this.setState({
                 id: this.props.id
             })
         }
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
                    { this.state.user.mainUser.mainUser.user.isAdmin === true && this.props.name !== 'Admin' && (
                        <section className="admin-control-div">
                            <Link to={'/collaborateur/' + this.props.id} className="cards-button">
                            <p>modifier</p>
                            </Link>
                            <p className="cards-button" onClick={this.remove}>supprimer</p>
                        </section>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}