import { createContext, ReactNode, useState, useEffect } from 'react'

export interface ProductTypes {
  id: string
  generatedId: number,
  name: string
  imageUrl: string
  price: number
  description: string
  defaultPriceId: string
}

interface CartShoppingProps {
  selectProduct: (product: ProductTypes) => void
  removeProduct: (id: number) => void
  addSelectProduct: ProductTypes[]
}

export const CartShoppingContext = createContext({} as CartShoppingProps)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export default function CartShoppingContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [ addSelectProduct, setAddSelectProduct ] = useState<ProductTypes[]>([])

  function selectProduct(product: ProductTypes) {
    setAddSelectProduct([...addSelectProduct, product])
  }
  
  function removeProduct(id: number) {
    const removeItem = addSelectProduct.filter(item => item.generatedId !== id)
    setAddSelectProduct(removeItem)
  }

  return (
    <CartShoppingContext.Provider
      value={{selectProduct, addSelectProduct, removeProduct}}
    >
      {children}
    </CartShoppingContext.Provider>
  )
}
