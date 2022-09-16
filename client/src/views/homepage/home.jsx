import React, { Component } from "react"
import Navbar from "../../components/navbar/navbar"
import Cards  from "../../components/cards/cards"
import { store } from "../../app/store"
import { randomUser } from "../../services/services"
import './home.css'


export default class Home extends Component {
    
    state = {
        randomUser: '',
        mainUser: store.getState().mainUser.mainUser.user.firstname
    }

    reloadRandomUser = () => {
        randomUser(store.getState().mainUser.mainUser.token).then(response => {
            this.setState({
                randomUser: response
            })
          }
        )
      }

    componentDidMount() {
        randomUser(store.getState().mainUser.mainUser.token).then(response => {
            this.setState({
                randomUser: response
            })
        })
    }

    render() {
        return (
            <section className="home-container">
                <Navbar/>
                <div className="home-cards-container">
                    <h1>Bienvenue sur l'INtranet {this.state.mainUser}</h1>
                    <p>Rencontrez vos collaborateurs aux 4 coins de la France!</p>
                    <h2>Connaissez-vous?</h2>
                    <Cards 
                    imgSRC={this.state.randomUser.photo}
                    name={this.state.randomUser.firstname}
                    country={this.state.randomUser.city + ', ' + this.state.randomUser.country}
                    email={this.state.randomUser.email}
                    phone={this.state.randomUser.phone}
                    birthday={this.state.randomUser.birthdate}
                    id={this.state.randomUser.id}/>
                </div>
                <div className="cards-button-wrapper">
                    <div>
                       <a href={'mailto:' + this.state.randomUser.email}> Lui dire bonjour </a>
                    </div>
                    <div onClick={this.reloadRandomUser}>
                        Rencontrez un nouveau collaborateur
                    </div>
                </div>
            </section>
        )
    }
}