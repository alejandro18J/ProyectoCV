import React from 'react'
import Image4  from './fotos/marga.jpeg';
import  Image5  from './fotos/margaritas.jpeg';

const Domicilio = () => {
  return (
    <div>
     
<h1>DOMICILIO</h1>
      <br/>
      <div id='Image5'>
        <img src={Image5} width="450" heigth="450"/>
        <br/>
        <br/>
        <h1>ES BELLISIMO UWU</h1>
        <br/>
        <img src={Image4} width="450" heigth="450"/>
       
      </div>

      <p></p>
      </div>
  )
}

export default Domicilio