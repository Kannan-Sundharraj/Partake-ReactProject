import React, { useState } from 'react'
import './Styles.css'
import logo from '../images/logo.png';
import '../components/Navbarstyles.css';
import { Link } from 'react-router-dom';
import productimage1 from '../images/productimage1.webp';
import productimage2 from '../images/productimage2.webp';
import productimage3 from '../images/productimage3.webp';
import penut from '../images/peanut.png';
import egg from '../images/egg.png';
import dairy from '../images/dairy.png';
import soy from '../images/soy.png';
import treenuts from '../images/treenuts.png';
import sesame from '../images/sesame.png';
import allergen from '../images/allergen.png';
import allergen2 from '../images/allergen2.png';
import allergen3 from '../images/allergen3.png';
import ingre1 from '../images/ingre1.webp';
import ingre2 from '../images/ingre2.avif';
import ingre3 from '../images/ingre3.avif';
import ingre4 from '../images/ingre4.avif';
import ingre5 from '../images/ingre5.webp';
import ingre6 from '../images/ingre6';
import productimage4 from '../images/productimage4';
import productimage5 from '../images/productimage5.webp';
import productimage6 from '../images/productimage6.webp';
import productimage7 from '../images/productimage7.webp';
import aboutphoto1 from '../images/aboutphoto1.webp';
import aboutphoto2 from '../images/aboutphoto2.webp';
import aboutphoto3 from '../images/aboutphoto3.webp';
// import ingreDetail from './IngreDetail';
// import { useState } from 'react';

const Home = () => {

    // function ingreDetail (){
    //     let gingerID = document.getElementById("ginger");
    //     let ginger = document.getElementById("ginger1")
    //     let vanillaID = document.getElementById("vanilla");
    //     let oatsID = document.getElementById("oats");
    //     let flaxID = document.getElementById("flax");
    //     let rosemaryID = document.getElementById("rosemary");
    //     let cinnamonID = document.getElementById("cinnamon");
    //     // switch  (true){
    //     //     case gingerID.style.display === "none" :
    //     //         gingerID.style.display = "block";
    //     //         break;
    //     // }
    //     const [display, updateDisplay] = useState("none")

    //     const displayChange = () =>{
    //         updateDisplay(display.style.display = "block")
    //     }
    //     gingerID.style.display = "none" ? "block" : "none";
    //     // vanillaID.style.display = "none" ? "block" : "block";
    
    
    //     // if(gingerID.style.display === "none"){
    //     //     gingerID.style.display = "block";      
    //     // }else{ 
    //     //     gingerID.style.display = "none";
    //     // }
    // }

  return (
    <div>
        <div class="navbar">
            <div>
                <ul class="productNav">
                    <li class="leftList dropdown-toggle" data-bs-toggle="dropdown"><a href="cookies.html">Products</a></li>    
                        <ul class="productList dropdown-menu">
                            <Link to='/cookies'><li class="dropdown-item text-decoration-none"><a href="cookies.html">Cookies</a></li></Link>
                            <Link to='/cookies'><li class="dropdown-item"><a href="cookies.html">Mini Cookies</a></li></Link>
                            <Link to='/wafers'><li class="dropdown-item"><a href="wafers and snack packs.html">Wafers</a></li></Link>
                            <Link to='/wafers'><li class="dropdown-item"><a href="wafers and snack packs.html">Snack Packs</a></li></Link>
                            <Link to='/grahams'><li class="dropdown-item"><a href="grahams and merch.html">Classic Grahams</a></li></Link>
                            <Link to='/grahams'><li class="dropdown-item"><a href="grahams and merch.html">Merch</a></li></Link>
                            <Link to='/carts'><li class="dropdown-item"><a href="#">Cart Items</a></li></Link>
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

        <section>
            <div class="home-text">
                <p>Carry it with <b class="pride">pride.</b></p>
                <p>Carry it with <b class="purpose">purpose.</b></p>
                <p>Carry it with <b class="impact">impact.</b></p>
                <p>Carry it with <b class="snack">snack.</b></p>
                <button>LEARN MORE</button>
            </div>
        </section>

        {/* <!-- products --> */}
        <section class="products">
            <div class="cookies">
                <h1>Cookies</h1>
                <Link to='/cookies'><p>DISCOVER MORE</p></Link>
                <hr class="underline"/>
                <img src={productimage1} height="325vh"/>
            </div>

            <div class="grahams">
                <h1>Classic Grahams</h1>
                <Link to='/grahams'><p>SHOP NOW</p></Link>
                <hr class="underline2"/>
                <img src={productimage2} height="325px"/>
            </div>

            <div class="wafers">
                <h1>Vanilla Wafers</h1>
                <Link to='/wafers'><p>DISCOVER MORE</p></Link>
                <hr class="underline"/>
                <img src={productimage3} height="325px"/>
            </div>
        </section>

        {/* <!-- allergens --> */}
        <section class="allergens">
            <h1>Share With Confidence</h1>
            <p>All Partake products are free of the top 9 allergens.</p>
            <div>
                <img src={penut} height="125px" width="125px" className='allergen'/>
                <img src={egg} height="125px" width="125px" className='allergen'/>
                <img src={dairy} height="125px" width="125px" className='allergen'/>
                <img src={soy} height="125px" width="125px" className='allergen'/>
                <img src={treenuts} height="125px" width="125px" className='allergen'/>
                <img src={sesame} height="125px" width="125px" className='allergen'/>
                <img src={allergen} height="125px" width="125px" className='allergen'/>
                <img src={allergen2} height="125px" width="125px" className='allergen'/>
                <img src={allergen3} height="125px" width="125px" className='allergen'/>
            </div>
        </section>

        {/* <!-- ingredients --> */}
        <section class="ingredients">
            <div class="ingredients-text">
                <h1>Because ingredients <br/>matter.</h1>
                <p class="ingreText">All of our products are baked with better-for-you, allergy-friendly ingredients like buckwheat, cassava, oats, and cinnamon so those with allergies and without can enjoy and share with confidence.</p>
                <b>LEARN MORE ABOUT OUR INGREDIENTS</b>
                <hr/>
            </div>
        
            <div class="ingredients-images col-lg-6 col-md-12">
                <div className='row'>
                    <div className='col' id="ginger1">
                        <button className='plus'><i class='bx bx-plus'></i></button>
                        <img src={ingre3} height="150px" width="150px"/>
                        <div id="ginger d-display">
                            <h3>Ginger</h3>
                            <p>A commonly used herbal medicine, ginger's bioactive compound gingerol is known for its anti-inflammatory and antioxidant effects.</p>
                        </div>
                    </div>
                    <div className='col'>
                        <button className='plus'><i class='bx bx-plus'></i></button>
                        <img src={ingre5} height="150px" width="150px"/>
                        <div id="vanilla">
                            <h3>Vanilla</h3>
                            <p>The vanilla bean is known for its fragrance and flavor, but it is also used to make medicine.</p>
                        </div>  
                    </div>
                        <div className='col'>    
                        <button className='plus'><i class='bx bx-plus'></i></button>
                        <img src={ingre4} height="150px" width="150px"/>          
                        <div id="oats">
                            <h3 >Quick Rolled Oats</h3>
                            <p>Sustainably grown and harvested from non-GMO seed.</p>
                        </div>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col'>
                        <button className='plus'><i class='bx bx-plus'></i></button>    
                        <img src={ingre1} height="150px" width="150px"/>
                        <div id="flax">
                            <h3>Flax</h3>
                            <p>These mighty seeds are packed with numerous nutrients, omega-3 fatty acids and fiber.</p>
                        </div>
                    </div>
                    <div className='col'>
                        <button className='plus'><i class='bx bx-plus'></i></button>
                        <img src={ingre6} height="150px" width="150px"/>
                        <div id="rosemary">
                            <h3>Rosemary</h3>
                            <p>With a very distinct flavor, rosemary is full of antioxidants and anti-inflammatory compounds.</p>
                        </div>
                    </div>
                    <div className='col'>
                        <button className='plus'><i class='bx bx-plus'></i></button>
                        <img src={ingre2} height="150px" width="150px"/>
                        <div id="cinnamon">
                            <h3>Cinnamon</h3>
                            <p>Traced back to Ancient Egypt, Cinnamon has been used for thousands of years as medicine and is now the 2nd most commonly used spice in the U.S.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ingreDetail d-flex position-relative'>
            
            </div>
        </section>

        {/* <!-- New products section --> */}
        <section class="new-products">
            <h1>What's New</h1>
            <div class="products-list">
                <div class="product">
                    <img src={productimage6} height="470px" width="470px"/>
                    <p class="product-text">Soft Baked Lemon Cookies</p>
                    <div class="stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <b class="rate">4.3</b>
                    </div>
                </div>

                <div class="product">
                    <img src={productimage4} height="470px" width="470px"/>
                    <p class="product-text">Soft Baked Snickerdoodle Cookies</p>
                    <div class="stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bx-star' ></i>
                        <b class="rate">3.9</b>
                    </div>
                </div>

                <div class="product">
                    <img src={productimage5} height="470px" width="470px"/>
                    <p class="product-text">Marvel Crunchy Super Hero <br/>Sprinkel Mini Cookie Snack Packs</p>
                    <div class="stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <b class="rate">5.0</b>
                    </div>
                </div>
            </div>
        {/* <!-- Find a store section --> */}
            <div class="store">
                <h2>Partake in your neighborhood.</h2>
                
                <div>
                <p>FIND A STORE</p>
                <hr class="underline3"/>
                </div>            
            </div>
        </section>

        {/* <!-- Reviews section --> */}
        <section class="review">
            <div class="review-image">
                <img src={productimage7} height="425vh"/>
            </div>

            <div class="review-text">
                <p>My son has a severe allergy to eggs.<br/> Finding treats and desserts that actually <br/>taste good is a challenge. He loves the <br/>Partake cookies. Bad news for him… the <br/>whole family does too!</p>
                <p id="reviewer">— RANDI G</p>
            </div>
        </section>

        {/* <!-- about section --> */}
        <section class="about">
            <div class="about-image"></div>

            <div class="about-text">
                <h1>Building a Bigger <br/>Table</h1>
                <p>A portion of proceeds support families <br/>living with food insecurity.</p>

                <div class="about-icons">
                    <div class="icon">
                    <i class='bx bxs-heart'></i>
                    <p>Championing Food Inclusivity</p>
                    </div>

                    <div class="icon"><i class='bx bx-knife'></i>
                    <p>Fighting Food Insecurity</p>
                    </div>

                    <div class="icon">
                    <i class='bx bxs-door-open'></i>
                    <p>Creating Opportunities in CPG</p>
                    </div>
                </div>

                <p id="read">READ MORE</p>
                <hr class="underline4"/>
            </div>
        </section>

        <section class="insta">
            <img src={aboutphoto1} height="500px" width="400px"/>
            <img src={aboutphoto2} height="500px" width="400px"/>
            <img src={aboutphoto3} height="500px" width="400px"/>

            <div class="insta-text">
                <h2>@PartakeFoods</h2>
                <p>FOLLOW US ON INSTAGRAM</p>
            </div>
        </section>
    </div>
  )
}

export default Home