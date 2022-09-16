import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
        <div className='fondo'>
            <img src="../img/fondo1.jpg" alt="" />
        </div>
        <header>
            <div className='logo'>
                <img src="../img/logo.png" alt="" />
            </div>
            <nav>
                <ul>
                <Link to="/">Inicio</Link>
                    <Link to="/category/men's clothing">Hombre</Link>
                    <Link to="/category/women's clothing">Mujer</Link>
                    <Link to="/">Contacto</Link>
                </ul>
            </nav>

        </header>
    </div>
  )
}

export default NavBar