import React from 'react'
import CartShopDefaultImage from "../../assets/CartShopDefault.svg"
import Image from "next/image"
import { CartShopBox, NumberOfItems } from "../../styles/components/cartShop"

export default function CartShop() {
  const totalItems = 0;

  return (
    <CartShopBox>
      {totalItems > 0 && 
        <NumberOfItems>
          {totalItems}
        </NumberOfItems>
      }
      <Image src={CartShopDefaultImage} alt="" />
    </CartShopBox>
  )
}