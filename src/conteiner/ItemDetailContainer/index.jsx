import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from '../../componentes/NavBar/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [detalleproducto, setDetalleproducto] = useState({})
    
    const {productId} = useParams();

  
    useEffect(()=> {

      
      (async ()=> {
        
  
          try {
            const response = await fetch( `https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();
            setDetalleproducto(data);
          } catch (error) {
            console.log(error);
          }
  
        })()
  
    }, [productId])
  
    console.log(detalleproducto)
  return (
    <div>
        <ItemDetail product={detalleproducto}/>
    </div>
  )
}

export default ItemDetailContainer