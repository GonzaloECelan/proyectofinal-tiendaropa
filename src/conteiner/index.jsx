import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../componentes/NavBar/ItemList';
import './itemlist.css';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {

const [productos, setProductos] = useState([]);

const {categoryId} = useParams();


useEffect(()=>{

    (async ()=> {
        const obtenerProduct = new Promise ((accept, reject)=> {
            setTimeout(()=> {
            accept(productos)
            }, 3000);
        })
        
        try {
            if (categoryId){
                const response = await fetch( `https://fakestoreapi.com/products/category/${categoryId} `);
                const productos = await response.json();
                setProductos(productos);
            }
            else{
                const response = await fetch( "https://fakestoreapi.com/products");
                const productos = await response.json();
                setProductos(productos);
            }

            
            } catch (error) {
                console.log(error);
        }
        
    
            
    
        })()

},[categoryId])

console.log(productos)
  return (
    <div>
        <div>
            <h2>Nuestros productos</h2>
        </div>
        <div className='list-prod'>
            <ItemList prod={productos}/>
        </div>
        
       

    </div>
  )
}

export default ItemListContainer