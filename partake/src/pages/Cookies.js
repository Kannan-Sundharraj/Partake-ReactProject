import React, { use } from 'react'
import './Cookies.css';
import logo2 from '../images/logo2.webp';
import bgimage from '../images/products/bgimage.webp';
import { Link } from 'react-router-dom';
import cookieProducts from '../products/CookiesList';
import { addToCart } from '../store/cartSlice/cartSlice';
import {useSelector, useDispatch } from 'react-redux'


const Cookies = () => {
    
    const cartItems = useSelector ((state) => state.cart.items);
    const dispatch = useDispatch ();
    const addItem = (a) => {dispatch(addToCart(a))}
    
    return (
    <div>
        <section class="home-nav">
            <div class="main-nav align-items-center py-2">
                <div class="navbar navbar-expand-lg mx-5 text-light">
                    <div class="container-fluid">
                        <ul class= "navbar-nav">
                            <li class= "nav-item pe-5 fw-bold dropdown-toggle" data-bs-toggle="dropdown">Products</li>
                                <ul class="productList dropdown-menu">
                                    <Link to='/cookies'><li class="dropdown-item">Cookies</li></Link>
                                    <Link to='/cookies'><li class="dropdown-item">Mini Cookies</li></Link>
                                    <Link to='/wafers'><li class="dropdown-item">Wafers</li></Link>
                                    <Link to='/wafers'><li class="dropdown-item">Snack Packs</li></Link>
                                    <Link to='/grahams'><li class="dropdown-item">Classic Grahams</li></Link>
                                    <Link to='/grahams'><li class="dropdown-item">Merch</li></Link>
                                    <Link to='/carts'><li class="dropdown-item">Cart Items</li></Link>
                                </ul>
                            <li class= "nav-item pe-5 fw-bold">Our Story</li>
                            <li class= "nav-item pe-5 fw-bold">Ingredients</li>
                        </ul>
                        <Link to='/'><img src={logo2} height="30vh" width="175px;"/></Link>
                        <ul class="navbar-nav">
                            <li class= "nav-item pe-5 fw-bold">Find Us</li>
                            <li class= "nav-item pe-5 fw-bold">Blog</li>                        
                            <i class='bx bx-search-alt-2 ps-5 fs-2'></i>
                        </ul>
                    </div>
                </div>    
                <div class="home-cookies px-5 py-4 d-flex">
                    <h1 class="display-3 fw-bold">Discover</h1>
                    <p class="ps-5 fs-4 ">Super delicious snacks you can share with <br/>confidence</p>
                </div>
            </div>
            <img src={bgimage} height="200px" class="cookie1"/>
            <img src={bgimage} height="100px" class="cookie2"/>
        </section>

    {/* <!-- Products --> */}
        <section>
            <div class="container text-primary">
                <div class="row">
                    <div class="col-2 py-5">
                        <h5>Cookies</h5>
                            <ul>
                                <li class="fw-bold">Crunchy Cookies</li>
                                <li class="fw-bold">Soft Baked Cookies</li>
                            </ul>
                        <a href="#mini-cookies"><h5>Mini Cookies</h5></a>
                    </div>

                    <div class="col-10 pt-3 mt-3 text-center">
                        <h2 class="fw-bold">Crunchy Cookies</h2>
                        <div class="row">
                            {cookieProducts.slice(0,3).map((product) =>(
                            <div class="col-lg-4 col-md-6">
                                <div class="card text-primary">
                                    <div class="card-body">
                                        <img src={product.image} class="card-img-top"/>
                                        <div class="card-title">{product.name}</div>
                                            <div>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <b class="rate"> {product.rating}</b>
                                            </div>
                                        <button className='btn btn-danger' onClick={()=>addItem(product)}>Add to Cart</button>    
                                    </div>
                                </div>
                            </div>
                            ))}

                        </div>

                        <h2 class="pt-3 fw-bold">Soft Baked Cookies</h2>
                        <div class="row">
                            {cookieProducts.slice(3,6).map((product) =>(
                            <div class="col-lg-4 col-md-6">
                                <div class="card text-primary">
                                    <div class="card-body">
                                        <img src={product.image} class="card-img-top"/>
                                        <div class="card-title">{product.name}</div>
                                            <div>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <b class="rate"> {product.rating}</b>
                                            </div>
                                        <button className='btn btn-danger' onClick={()=>addItem(product)}>Add to Cart</button>    
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>

                        <h2 class="pt-3 fw-bold" id="mini-cookies">Mini Cookies</h2>
                        <div class="row">
                            {cookieProducts.slice(6,9).map((product) =>(
                            <div class="col-lg-4 col-md-6">
                                <div class="card text-primary h-100">
                                    <div class="card-body">
                                        <img src={product.image} class="card-img-top"/>
                                        <div class="card-title">{product.name}</div>
                                            <div>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <b class="rate"> {product.rating}</b>
                                            </div>
                                        <button className='btn btn-danger' onClick={()=>addItem(product)}>Add to Cart</button>    
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>                   
                    </div>    
                </div>            
            </div>
        </section>
    </div>
  )
}

export default Cookies