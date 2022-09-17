import React, { Component } from "react"
import Navbar from "../../components/navbar/navbar"
import Cards  from "../../components/cards/cards"
import { store } from "../../app/store"
import { coworkers } from "../../services/services"
import './coworkerList.css'



export default class CoworkerList extends Component {

    state = {
        coworkerList: '',
        searchbarValue: '',
        option: 'firstname'
    }

    componentDidMount() {
        coworkers(store.getState().mainUser.mainUser.token).then(response => {
            console.log(response)
            this.setState({
                coworkerList: response,
                coworkersListFull: response,
            })
        })
    }

    componentDidUpdate() {
        this.selectValue = (event) => {
            console.log(event.target.value)
            this.setState({
                option: event.target.value,
                coworkerList: this.state.coworkersListFull
            })
          }
        this.searchValue = (event) => {
            if (event.target.value === '') {
                console.log('la search bar na pas de value')
                this.setState({
                    coworkerList: this.state.coworkersListFull
                })
            } else {
                console.log(this.state)
            this.setState({
                searchbarValue: event.target.value,
                coworkerList: this.state.coworkersListFull.filter(character => {
                    return character[this.state.option].includes(event.target.value)})
                })
            }
          }
    }

    render() {
        return(
            <section className="list-container">
                <Navbar />
                <form>
                    <input 
                    type="text" 
                    onChange={this.searchValue}
                    name="textsearch"/>
                    <select 
                    onChange={this.selectValue}
                    name="selectchange">
                        <option value="firstname">Nom</option>
                        <option value="city">Ville</option>
                        <option value="service">Service</option>
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