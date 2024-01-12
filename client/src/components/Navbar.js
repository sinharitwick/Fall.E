import React, { useState } from 'react'
import '../assets/Styles/Navbar.css'
import userImg from '../assets/Images/user.svg'
import searchImg from '../assets/Images/search.svg'
import heartImg from '../assets/Images/heart.svg'
import cartImg from '../assets/Images/cart.svg'
import { Link } from 'react-router-dom';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownFocused, setIsDropdownFocused] = useState(false);
  return (
    <div className="navbar-box">
        <div className='navbar-container'>
            <div className="navbar-brand">
                <h3>FALL.E</h3>
            </div>
            <div className='navbar-menu'>
                <ul>
                    <li><Link to='/' style={{ textDecoration:'none' }}>Home</Link></li>
                    <li><Link to='/shop' style={{ textDecoration:'none' }}>Shop</Link></li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="navbar-icons">
                <img src={userImg} alt="" onMouseEnter={() => setIsDropdownOpen(true)} />
                {isDropdownOpen && (
                    <div className='dropdown-menu'
                    onMouseEnter={() => setIsDropdownFocused(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}>
                        <ul>
                            <li><button className='dropdown-btn'><Link>Login</Link></button></li>
                            <li><button className='dropdown-btn'><Link>Signup</Link></button></li>
                        </ul>
                    </div>
                )}
                <img src={searchImg} alt="" />
                <img src={heartImg} alt="" />
                <img src={cartImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar