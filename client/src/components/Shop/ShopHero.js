import React from 'react'
import Navbar from '../Navbar'
import '../../assets/Styles/ShopHero.css'

function ShopHero() {
  return (
    <div className='shophero-container'>
    <Navbar />
    <div className="shophero-overlay">
        <h1>Shop</h1>
        <p>Home &gt; Shop</p>
    </div>
    </div>
  )
}

export default ShopHero