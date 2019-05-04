import React, { Component } from 'react'
import './CardNoticia.css'
import {Link} from 'react-router-dom'
import icon from '../../../Assets/Icons/more.svg'
export default class CardNoticia extends Component {

    state={
        open: false
    }

    OpenCard=()=>{
        const close = !this.state.open;
        this.setState({open:close});
    }

  render() {
    return (
        <div className="Card">
        <Link to={"/Noticia/"+this.props.id}><img className="Imagen" src={this.props.url} alt="img" style={{width:'100%'}}></img></Link>
            
            <div className="Container">
                <h4 className="Titulo"><b>{this.props.titulo}</b></h4> 
                <p style={{display:(this.state.open)?'inline-block':'none'}} >{this.props.descripcion}</p> 
                <div className="d-flex justify-content-center">
                <img onClick={this.OpenCard} src={icon} alt="img" style={{width:'20px'}}></img>
                </div>
            </div>
        </div>
    )
  }
}
