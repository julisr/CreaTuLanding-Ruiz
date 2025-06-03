import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Item({title, price, description, image, id}) {
  return (

   

    <Link to={`/productos/${id}`} className='card'>
      <img className='imagen-item' src={image} alt={title} />
      <div className='texto-item'>
      <p>{title}</p>
      <p>${price}</p>
      </div> 
      
    </Link>
   
  );
}

export default Item;