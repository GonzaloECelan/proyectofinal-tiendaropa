import React from 'react'
import { useEffect, useState}  from 'react';
import './style.css';


const ItemCount = ({onAdd}) => {

    const stock = 10;

    const [cantidad, setCantidad] = useState(0);
    
    const eventClickmas = (e) => {
      if(cantidad < stock){
        setCantidad(cantidad + 1)}
      else{
        alert("No hay stock disponible")

      };

      }
      const eventClickmenos = (e) => {
        if(cantidad > 1){
          setCantidad(cantidad - 1)};
        }
      


            useEffect(()=>{

              console.log("se sumo uno");
},[cantidad]);
  return (
    <div>
        <div className='contador'>
        <span className='mas' onClick={eventClickmas}>+</span>
        <span className='cant'>{cantidad}</span>
        <span className='menos' onClick={eventClickmenos}>-</span>
        </div>
        <button onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>
        
    </div>
    
  )
}

export default ItemCount