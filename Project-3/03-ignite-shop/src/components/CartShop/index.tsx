import React, { useContext, useState } from 'react'
import CartShopDefaultImage from "../../assets/CartShopDefault.svg"
import Image from "next/image"
import { CartShopBox, NumberOfItems, DrawerContainer, CartShopContainer, ContainerItem } from "../../styles/components/cartShop"
import { CartShoppingContext } from "../../contexts/CartShoppingContext";
import axios from "axios";

import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import IconClose from '../../assets/IconClose.svg'

export default function CartShop() {
  const { addSelectProduct, removeProduct } = useContext(CartShoppingContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  function formatPrice (price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price / 100) 
  }

  const price = addSelectProduct.map(product => product.defaultPriceId)

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products: addSelectProduct,
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  const totalOfItems = addSelectProduct.length;

  const total = addSelectProduct.map(product => product.price).reduce((acc, curr) => acc + curr,
  0)

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

            <ContainerItem>
              {addSelectProduct.map(products => (
                <div className='itemBox' key={products.generatedId}>
                  <div className='itemBox--image'>
                    <Image src={products.imageUrl} width={100} height={93} alt=''/>
                  </div>
                  <div className='itemBox--infos'>
                    <p>{products.name}</p>
                    <strong>{formatPrice(products.price)}</strong>
                    <a onClick={()=> removeProduct(products.generatedId)}>Remover</a>
                  </div>
                </div>
              ))}
            </ContainerItem>
          </div>
          <footer>
            <div>
              <p>Quantidade</p>
              <p>{totalOfItems}</p>
            </div>
            <div>
              <strong>Valor Total</strong>
              <strong className='strong-fontSize'>{formatPrice(total)}</strong>
            </div>
            <button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>Finalizar Compra</button>
          </footer>
        </DrawerContainer>
      </Drawer>

      <CartShopBox onClick={toggleDrawer}>
        {totalOfItems > 0 && 
          <NumberOfItems>
            {totalOfItems}
          </NumberOfItems>
        }
        <Image src={CartShopDefaultImage} alt="" />
      </CartShopBox>
    </CartShopContainer>
  )
}