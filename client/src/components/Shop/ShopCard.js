import React from 'react'
import '../../assets/Styles/ShopCard.css'

function ShopCard() {
  return (
    <div className='shopcard-container'>
        <div className='shopcard-img'></div>
        <div className='shopcard-desc'>
            <p>Solid Padded Jacket</p>
            <p>HRX</p>
            <p>₹1999</p>
            <button className='shopcard-btn'>View Details</button>
        </div>
    </div>
  )
}

export default ShopCard