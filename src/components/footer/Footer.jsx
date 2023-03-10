import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Alain Honore</h1>
  <ul className="footer__list">
    <li>
        <a href="#about" className="footer__link">About</a>
    </li>

    <li>
        <a href="#portifolio" className="footer__link">Projects</a>
    </li>

    <li>
        <a href="#services" className="footer__link">Services</a>
    </li>
    </ul>   


       <div className="footer__social">
        <a href="https://www.instagram.com/"
        className='footer__social-link' target="_blank">
            <i class="bx bxl-instagram"></i>
            </a> 

            
        <a href="https://www.facebook.com/profile.php?id=100073290738749"
        className='footer__social-link' target="_blank">
            <i class="bx bxl-facebook"></i>
            </a> 

            
        <a href="https://twitter.com/HonoreHimbaza"
        className='footer__social-link' target="_blank">
            <i class="bx bxl-twitter"></i>
            </a> 
       </div>
       <span className='footer__copy'>&#169; 2023. All rights Designed by Alain Honore</span>
        </div>
    </div>
  )
}

export default Footer