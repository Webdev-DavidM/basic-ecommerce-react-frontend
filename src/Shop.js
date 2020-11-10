import React from 'react';

import ShopNavbar from './components/ShopNavbar';
import ShopItems from './components/ShopItems';
export default function Shop() {
  // const shopItems = useSelector(shopList);
  // console.log(shopItems);
  return (
    <>
      <ShopNavbar />

      <div className="shop-flex-container">
        <ShopItems />
      </div>
    </>
  );
}
