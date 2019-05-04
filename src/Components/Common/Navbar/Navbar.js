import React, { Component } from 'react'
import './Navbar.css';
import SearchBar from './SearchBar/SearchBar'
import NavigationItems from './NavigationItems/NavigationItems'
export default class Navbar extends Component {
  render() {
    return (
      <div className="NavBar">
        <h3 className="TituloN"><b>NOTICIAS</b></h3>
        <SearchBar />
        <NavigationItems />
      </div>
    )
  }
}
