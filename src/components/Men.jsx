import React from 'react'
import GaneralBanner from './GaneralBanner'
import Banner from './Banner'
import Cart from './Cart'
import ProductCarousel from './ProductCarousel'

export default function Men() {
  return (
    <div>
        
 <GaneralBanner image = "src/Image/Men.png" btnname = "Shop Men Shoes" h1 = "Lex Louning" p1  ="Relax in style with our sophisticated selection "  />
 <br /><br /><br /><br />

<Banner h1  ="Men's Collection" p1 = "Most Popular prodcuts for men" />

<br /><br /><br /><br />
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center">
        <Cart name="Nike Air Max" price="449" />
        <Cart name="Nike Jordan" price="899" />
        <Cart name="Air Pro" price="1000" />
        </div>
        <ProductCarousel />

    </div>
    
  )
}
