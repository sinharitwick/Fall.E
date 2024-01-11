import React from 'react'
import '../assets/Styles/Navbar.css'
import userImg from '../assets/Images/user.svg'
import searchImg from '../assets/Images/search.svg'
import heartImg from '../assets/Images/heart.svg'
import cartImg from '../assets/Images/cart.svg'

function Navbar() {
  return (
    <div className="navbar-box">
        <div className='navbar-container'>
            <div className="navbar-brand">
                <h3>FALL.E</h3>
            </div>
            <div className='navbar-menu'>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="navbar-icons">
                <img src={userImg} alt="" />
                <img src={searchImg} alt="" />
                <img src={heartImg} alt="" />
                <img src={cartImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar