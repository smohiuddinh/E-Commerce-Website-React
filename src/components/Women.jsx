import React from 'react';
import GaneralBanner from '../components/GaneralBanner';
import Cart from './Cart';
import Banner from './Banner';
import ProductCarousel from './ProductCarousel';
export default function Women() {
    return (
        <div>

<GaneralBanner                 
                 image="src/Image/Women.png" 
                btnname="Shop Women Shoes" 
                h1="ALL-DAY DAZZLE" 
                p1="Timeless Pieces with a Fashion-Forward Twist"
            />


<Banner h1  ="WOMENS COLLECTION" p1 = "Most Popular Products for Women" />

        <ProductCarousel />
    </div>
        
        
    );

}
