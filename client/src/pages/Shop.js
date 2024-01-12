import React from 'react'
import ShopHero from '../components/Shop/ShopHero'
import ShopRange from '../components/Shop/ShopRange'
import ShopProducts from '../components/Shop/ShopProducts'
import Footer from '../components/Footer'

function Shop() {
  return (
    <>
        <ShopHero />
        <ShopRange />
        <ShopProducts />
        <Footer />
    </>
  )
}

export default Shop