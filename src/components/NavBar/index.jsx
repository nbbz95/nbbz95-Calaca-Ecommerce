import React from "react";
import './styles.css';
import CartWidget from '../CartWidget'



export default function NavBar() {

    return (
        <ul className="nav-list">
            <img src='/logo.webp' alt=""/>
            <li className="nav-item">
                <a href="#home">Calaca</a>
            </li>
            <li className="nav-item">
                <a href="#news">Remeras/Musculosas</a>
            </li>
            <li className="nav-item">
                <a href="#contact">Pantalones/Bermudas</a>
            </li>
            <li className="nav-item">
                <a href="#about">Calzado</a>
            </li>
            <div className="widget-container">
                <CartWidget/>
            </div>
        </ul>
    );
}

