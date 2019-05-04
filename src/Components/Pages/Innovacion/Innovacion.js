import React, { Component } from 'react'
import CardNoticia from '../../Common/Card/CardNoticia'
import {Noticias} from '../../../Data/ListaTodos';
export default class Innovacion extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        {
          Noticias.map((noticia,index) =>{
            return(
              <div className="col-sm-4" key={index} >
                  <CardNoticia url={noticia.url} titulo={noticia.titulo} descripcion={noticia.descripcion} id={noticia.id} />
              </div>
            )
          })
        }
        
        
      </div>          
    </div>
    )
  }
}
