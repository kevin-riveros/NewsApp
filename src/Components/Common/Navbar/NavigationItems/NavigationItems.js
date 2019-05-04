import React, { Component } from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css';
export default class NavigationItems extends Component {
  render() {
    return (
      <ul className = "NavigationItems">
        
        <NavigationItem link="/" exact>Todos</NavigationItem>
        <NavigationItem link="/institucional">Institucional</NavigationItem>
        <NavigationItem link="/reconocimiento">Reconocimiento</NavigationItem>
        <NavigationItem link="/innovacion">Innovación</NavigationItem>
    </ul>
    )
  }
}
