import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './NavigationItem.css'
export default class NavigationItem extends Component {
  render() {
    return (
      <li className = "NavigationItem">
        <NavLink to={this.props.link}
        exact = {this.props.exact}
        >{this.props.children}
        </NavLink>
    </li>
    )
  }
}
