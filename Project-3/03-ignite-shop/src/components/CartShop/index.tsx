import React, { useState } from 'react'
import CartShopDefaultImage from "../../assets/CartShopDefault.svg"
import Image from "next/image"
import { CartShopBox, NumberOfItems, DrawerContainer, CartShopContainer } from "../../styles/components/cartShop"

import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import IconClose from '../../assets/IconClose.svg'
import Tshirt from '../../assets/Tshirt.svg'

export default function CartShop() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const totalItems = 0;

  return (
    <CartShopContainer>
     <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        size='480'
      >
        <DrawerContainer>
          <div className='container'>
            <header>
              <Image onClick={toggleDrawer} src={IconClose} alt=''/>
            </header>

            <h2>Sacole de compras</h2>

            <div className='itemBox'>
              <div className='itemBox--image'>
                <Image src={Tshirt} alt=''/>
              </div>
              <div className='itemBox--infos'>
                <p>Camiseta Beyond the Limits</p>
                <strong>R$ 79.90</strong>
                <a>Remover</a>
              </div>
            </div>
          </div>
          <footer>
            <div>
              <p>Quantidade</p>
              <p>3 itens</p>
            </div>
            <div>
              <strong>Valor Total</strong>
              <strong className='strong-fontSize'>R$ 79.90</strong>
            </div>
            <button>Finalizar Compra</button>
          </footer>
        </DrawerContainer>
      </Drawer>

      <CartShopBox onClick={toggleDrawer}>
        {totalItems > 0 && 
          <NumberOfItems>
            {totalItems}
          </NumberOfItems>
        }
        <Image src={CartShopDefaultImage} alt="" />
      </CartShopBox>
    </CartShopContainer>
  )
}