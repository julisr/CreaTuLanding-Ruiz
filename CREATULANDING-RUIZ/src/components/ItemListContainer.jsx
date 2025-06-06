import { useEffect, useState } from "react";
import ItemList from "./ItemList";

import { productos } from "../productos";


function ItemListContainer() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    fetchProductos
      .then((data) => {
        setItems(data);
      })

  }, []);

  return (
    <div className="container">
      <ItemList items={items}/>
    </div>
  );
}

export default ItemListContainer