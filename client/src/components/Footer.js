import React from 'react'
import '../assets/Styles/Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-upper'>
        <div>
          <h2 className='footer-brand'>FALL.E</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, ex</p>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <input className='sub-inp' type="email" placeholder='Enter your email address' />
          <button className='sub-btn'>SUBSCRIBE</button>
        </div>
      </div>
      <div className='footer-lower'>
        <p>2024 FALL.E | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer