import React, { Component } from "react"
import Navbar from "../../components/navbar/navbar"
import Cards  from "../../components/cards/cards"
import { store } from "../../app/store"
import { coworkers } from "../../services/services"
import './coworkerList.css'

export default class CoworkerList extends Component {

    state = {
        coworkerList: ''
    }

    componentDidMount() {
        coworkers(store.getState().mainUser.mainUser.token).then(response => {
            console.log(response)
            this.setState({
                coworkerList: response
            })
        })
    }

    componentDidUpdate() {
            console.log('fdsfdsfdsfdsfsdfds',this.state.coworkerList)
    }

    render() {
        return(
            <section className="list-container">
                <Navbar />
                <form>
                    <input type="text" />
                    <select>
                        <option value="Nom">Nom</option>
                        <option value="Ville">Ville</option>
                    </select>
                </form>
                <div className="cards-container-list">
                {this.state.coworkerList ? (this.state.coworkerList.map(x => 
                
                    <Cards 
                    imgSRC={x.photo}
                    name={x.firstname + ' ' + x.lastname}
                    country={x.city + ', ' + x.country}
                    email={x.email}
                    phone={x.phone}
                    birthday={x.birthdate}
                    id={x.id}/>
                
                )) : (<div>bonjour</div>)}
                </div>
            </section>
        )
    }
}