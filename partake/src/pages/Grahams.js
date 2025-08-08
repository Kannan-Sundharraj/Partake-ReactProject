import React from 'react'
import logo2 from '../images/logo2.webp';
import bgimage from '../images/products/bgimage.webp';
import { Link } from 'react-router-dom';
import grahamProducts from '../products/GrahamLIst';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice/cartSlice';

const Grahams = () => {
    const carts = useSelector(state=>state.cart.items);
    const dispatch = useDispatch();
    const addItem = (b) => {dispatch(addToCart(b))}
    
  return (
    <div>
        
        <section class="home-nav">
            <div class="main-nav align-items-center py-2">
                <div class="navbar navbar-expand-lg mx-5 text-light">
                    <div class="container-fluid">
                        <ul class= "navbar-nav">
                            <li class= "nav-item pe-5 fw-bold dropdown-toggle" data-bs-toggle="dropdown">Products</li>
                                <ul class="productList dropdown-menu">
                                    <Link to='/cookies'><li class="dropdown-item"><a href="cookies.html">Cookies</a></li></Link>
                                    <Link to='/cookies'><li class="dropdown-item"><a href="cookies.html">Mini Cookies</a></li></Link>
                                    <Link to='/wafers'><li class="dropdown-item"><a href="wafers and snack packs.html">Wafers</a></li></Link>
                                    <Link to='/wafers'><li class="dropdown-item"><a href="wafers and snack packs.html">Snack Packs</a></li></Link>
                                    <Link to='/grahams'><li class="dropdown-item"><a href="grahams and merch.html">Classic Grahams</a></li></Link>
                                    <Link to='/grahams'><li class="dropdown-item"><a href="grahams and merch.html">Merch</a></li></Link>
                                    <Link to='/carts'><li class="dropdown-item"><a href="#">Cart Items</a></li></Link>
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

        <section>
            <div class="container text-primary">
                <div class="row position-relative">
                    <div class="col-2 py-5">
                        <h5>Classic Grahams</h5>
                        <h5>Merch</h5>
                    </div>

                    <div class="col pt-3 text-center">
                        <h2 class="pt-5 fw-bold">Classic Grahams</h2>
                        <div class="row">
                            {grahamProducts.slice(0,3).map((items) => (
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="card text-primary mb-2">
                                    <div class="card-body">
                                        <img src={items.image} class="card-img-top" width="100px"/>
                                        <div class="card-title">{items.name}</div>
                                            <div>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <b class="rate">{items.rating}</b>
                                            </div>
                                        <button className='btn btn-danger' onClick={()=>addItem(items)}>Add to Cart</button>    
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>

                        <h2 class="pt-3 fw-bold">Merch</h2>
                        <div class="row">
                           {grahamProducts.slice(3,4).map((items) => (
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="card text-primary mb-2">
                                    <div class="card-body">
                                        <img src={items.image} class="card-img-top" width="100px"/>
                                        <div class="card-title">{items.name}</div>
                                            <div>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <i class='bx bxs-star'></i>
                                                <b class="rate">{items.rating}</b>
                                            </div>
                                        <button className='btn btn-danger' onClick={()=>addItem(items)}>Add to Cart</button>    
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

export default Grahams