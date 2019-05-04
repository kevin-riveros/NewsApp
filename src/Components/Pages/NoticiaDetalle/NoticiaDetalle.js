import React, { Component } from 'react'
import {Noticias} from '../../../Data/ListaTodos';
import './NoticiaDetalle.css';
import iconHeart from '../../../Assets/Icons/heart.svg';
import iconComments from '../../../Assets/Icons/comment.svg';
import iconshare from '../../../Assets/Icons/share.svg';
import iconBookmark from '../../../Assets/Icons/bookmark.svg';
import CommentComponent from '../../Common/Comment/Comment';
export default class NoticiaDetalle extends Component {

    state={
        url:"",titulo:"",descripcion:"",error:false
    }
    componentDidMount(){
        const Noticia = Noticias.find(Noticia => Noticia.id === Number(this.props.match.params.id))
        if(Noticia){
            console.log(Noticia)
            this.setState({
                url:Noticia.url,
                titulo:Noticia.titulo,
                descripcion:Noticia.descripcion,
                error:false})
        }
        else{
            this.setState({error:true})
        }
    }
  render() {
    return (
      <div>{(this.state.error===false)?
        <div className="ContainerDetalle">
            <img className="ImagenDetalle" src={this.state.url} alt="img"></img>
            <div className="Gradiente" >
            <div className="Centrado"><b>{this.state.titulo}</b></div>

            </div>

            <div className="row justify-content-between ">
                <div className="col-auto">
                    <div className="row" style={{margin:'0 0 0 15px'}}>
                        <img  className="Icono" src={iconHeart} alt="img" ></img>
                        <p className="Text">12</p>
                        <img className="Icono" src={iconComments} alt="img" ></img>
                        <p className="Text">12</p>
                    </div>
                    
                </div>

                <div className="col-auto">
                    <img className="Icono" src={iconshare} alt="img" ></img>
                    <img className="IconoDer" src={iconBookmark} alt="img" ></img>
                </div>
            </div>
            <p className="Fecha" >Abril 05, 2019</p> 

            <p className="Detalle" >{this.state.descripcion}</p> 

            <CommentComponent />

        </div>




        :<p>Error, url inválido </p>}
      </div>
    )
  }
}
