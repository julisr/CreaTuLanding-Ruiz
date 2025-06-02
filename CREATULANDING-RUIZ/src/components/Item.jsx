import React from 'react';
import { Link } from 'react-router-dom';
import '../Item.css';

function Item({title, price, description, image, id}) {
  return (
    <Link to={`/productos/${id}`} className='card'>
      <h2>{title}</h2>
      <h3>${price}</h3>
      <img src={image} alt={title} style={{ width: "100px" }} />
    </Link>
  );
}

export default Item;