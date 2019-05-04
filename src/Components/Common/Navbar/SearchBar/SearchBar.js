import React, { Component } from 'react'
import './SearchBar.css'
import icon from '../../../../Assets/Icons/search.svg'
export default class SearchBar extends Component {
  render() {
    return (
    <div className="Search">
        <input type="search" placeholder="¿Qué deseas saber?" />
        <img src={icon} alt="icon" className="Icon"></img>
    </div>
    )
  }
}
