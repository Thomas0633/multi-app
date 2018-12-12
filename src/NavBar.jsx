import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return(
            <div className='backgroundNavBar d-flex align-items-center justify-content-center'>
              <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/">Accueil</NavLink>
              <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/search2">Search</NavLink>
              <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/compteur">Compteur</NavLink>
              <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/panier">Panier</NavLink>
              <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/page-perso">Page perso</NavLink>
              <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 mr-4 linkNav' activeClassName='active' to="/calcul">Calculatrice</NavLink>
              <NavLink className='pl-2 pr-2 pt-1 pb-1 ml-4 linkNav' activeClassName='active' to="/todolist">To do List</NavLink>
            </div>
        )
    }
}

export default NavBar;