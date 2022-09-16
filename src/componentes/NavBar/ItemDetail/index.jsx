import React from 'react'
import ItemCount from '../ItemCount';
import './itemdetail.css';

const ItemDetail = ({product}) => {
  return (
    <div>
        <div className='detail'>
  <h2>{product.category}</h2>
<div className='detail-img'>
  <img src={product.image} alt="" />
</div>
  <div className='detail-inf'>
    <span className='title'>{product.title}</span>
    <span className='price'>${product.price}</span>
    <span className='more'>MAS VENDIDO</span>
    <span className='stock'>Stock disponible</span>
    {/* <span className='comprar'>Comprar ahora</span>
    <span className='agregar'>Agregar al carrito</span> */}
    <ItemCount/>
  </div>
    

</div>
    </div>
  )
}

export default ItemDetail