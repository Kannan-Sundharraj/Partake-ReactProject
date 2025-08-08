import React from 'react'
import logo from '../images/logo.png';
import './Navbarstyles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div class="navbar">
            <div>
                <ul class="productNav">
                    <li class="leftList dropdown-toggle" data-bs-toggle="dropdown"><a href="cookies.html">Products</a></li>    
                        <ul class="productList dropdown-menu">
                            <Link to='/cookies'><li class="dropdown-item"><a href="cookies.html">Cookies</a></li></Link>
                            <Link to='/cookies'><li class="dropdown-item"><a href="cookies.html">Mini Cookies</a></li></Link>
                            <Link to='/wafers'><li class="dropdown-item"><a href="wafers and snack packs.html">Wafers</a></li></Link>
                            <Link to='/wafers'><li class="dropdown-item"><a href="wafers and snack packs.html">Snack Packs</a></li></Link>
                            <Link to='/grahams'><li class="dropdown-item"><a href="grahams and merch.html">Classic Grahams</a></li></Link>
                            <Link to='/grahams'><li class="dropdown-item"><a href="grahams and merch.html">Merch</a></li></Link>
                        </ul>
                    <li className='leftList'>Our Story</li>
                    <li className='leftList'>Ingredients</li>
                </ul>
            </div>
            <Link to='/'><img src={logo} class="nav-brand"/></Link>
            <ul class="icons-right">
                <li class="right-list">Find Us</li>
                <li class="right-list">Blog</li>
                <i class='bx bx-search-alt-2 right-list'></i>
            </ul>
        </div>
    </div>
  )
}

export default Navbar