import React from 'react'
import { Titulo } from '../constants/constanst'
import "../css/Header.css"

const Header = () => {

  return (
    <div className='header'>
      <div class="container" style={{background:"red", paddingTop:"20px"}}>
        <br />
        <h1>{Titulo}</h1>
        <br />
        <br/>
      </div>
    </div>
  )
}

export default Header