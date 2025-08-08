import React from 'react'
import footerimage from '../images/footerimage.webp'
import './Footerstyles.css';

const Footer = () => {
  return (
    <div>
        <section class="footer">
            <div class="footer-row">
                <div class="column1">
                    <p>FAQ</p>
                    <p>CONTACT</p>
                    <p>BLOG</p>
                    <p>SITEMAP</p>  
                </div>

                <div class="column2">
                    <p>PRESS</p>
                    <p>TERMS</p>
                    <p>PRIVACY</p>
                </div>

                <div class="footer-right">
                    <h3>Be in the Know.</h3>
                    <div class="footer-icons">
                        <i class='bx bxl-twitter'></i>
                        <i class='bx bxl-facebook-circle'></i>
                        <i class='bx bxl-pinterest'></i>
                        <i class='bx bxl-instagram' ></i>
                        <i class='bx bxl-tiktok'></i>
                        <i class='bx bxl-linkedin'></i>
                    </div>

                    <div class="mail">
                        <input type="email" placeholder="Email Address"/>
                        <p>SUBSCRIBE</p>
                    </div>
                    <hr class="underline5"/>
                    <p>Get Updates, coupons and news from Partake!</p>

                </div>
            </div>

            <div class="footer-image">
                <img src={footerimage}/>
                <p>Copyright @ 2025 Partake Foods</p>
            </div>
        </section>
    </div>
  )
}
  
export default Footer