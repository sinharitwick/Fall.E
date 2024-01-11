import React from 'react'
import '../../assets/Styles/Range.css'

function Range() {
  return (
    <div className='range-container'>
        <div className='range-txt'>
            <h3>Browse Our Range</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, odio</p>
        </div>
        <div className='range-products'>
            <div>
                <div className='range-img1'></div>
                <div className='range-caption'>
                    <p>Jackets</p>
                </div>
            </div>
            <div>
                <div className='range-img2'></div>
                <div className='range-caption'>
                    <p>Sweaters</p>
                </div>
            </div>
            <div>
                <div className='range-img3'></div>
                <div className='range-caption'>
                    <p>Hoodies</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Range