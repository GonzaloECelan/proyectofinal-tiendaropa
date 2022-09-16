import React from 'react'
import Item from '../Item'
import './list.css';

const ItemList = ({prod}) => {
    
    

  
  return (
    <div className='itemlist'>
         {prod.map(product =>{
            return <Item key={product.id} product={product}/>

})}
    </div>

  )
}

export default ItemList