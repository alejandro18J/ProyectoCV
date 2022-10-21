import React from 'react'
import  Image  from './fotos/free.jpg';
import  Image2  from './fotos/memo.jpg';
import  Image3  from './fotos/chema.jpg';

const Hobbies = () => {
  return (
    <div>
      <h1>1. JUGAR VIDEO JUEGOS</h1>
      <br/>
      <div id='Image'>
        <img src={Image} width="450" heigth="450"/>
        <br/>
        <br/>
        <h1>2. JUGAR FUT BOL</h1>
        <br/>
        <img src={Image2} width="450" heigth="450"/>
        <br/>
        <br/>
        <h1>3. VER SERIES</h1>
        <img src={Image3} width="450" heigth="450"/>

      </div>

      <p></p>
      </div>
  )
}

export default Hobbies