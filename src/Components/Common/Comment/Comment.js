import React, { Component } from 'react'
import './Comment.css'
import icon from '../../../Assets/Icons/send.svg'
export default class Comment extends Component {
  render() {
    return (
      <div className="MessageComponent">
          <img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png" style={{width:'40px',height:'40px'}}></img>

          <div className="Message">
            <input type="search" placeholder="Escribe un comentario" />
         </div>
         <img onClick={()=>alert("Se envió comentario")} src={icon} alt="icon" className="Icon"></img>

      </div>
    )
  }
}
