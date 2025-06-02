import React from "react";
import Item from "./Item";
import { useState } from "react";
import '../App.css'

const categories = {
    collares: "collares",
    aros: "aros",
    anillos: "anillos",
}

function ItemList({items}) {
const [selectedCategory, setSelectedCategory] = useState("");

const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;


 return (
<div>
    <div className="category-buttons">
        <button className="button"  onClick={() => setSelectedCategory(categories.collares)}>Collares</button>
        <button className="button" onClick={() => setSelectedCategory(categories.aros)}>Aros</button>
        <button className="button" onClick={() => setSelectedCategory(categories.anillos)}>Anillos</button>
        <button className="button" onClick={() => setSelectedCategory("")}>Todos</button>
    </div>
    {filteredItems.map(item => (
       <Item
  key={item.id}
  id={item.id}
  title={item.title}
  price={item.price}
  description={item.description}
  image={item.image}
/>
    ))}
</div>
 )

}

export default ItemList;