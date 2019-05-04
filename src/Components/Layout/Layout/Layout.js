import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Navbar from '../../Common/Navbar/Navbar'
export default class Layout extends Component {
  render() {
    return (
        <Aux>
            <Navbar />
            <main className="content">
                {this.props.children}
            </main>
        </Aux>
    )
  }
}
