import { createContext, ReactNode, useState, useEffect } from 'react'

interface SelectedCoffeesData {
  name: string
  image: string
  description: string
  tags: string[]
  price: number
  amount: number
  total: number
}

interface CoffeeContextProps {
  coffeeSelected: SelectedCoffeesData[]
  setCoffee: (coffees: SelectedCoffeesData[]) => void
  increaseAmountOnCheckout: (name: string) => void
  decreaseAmountOnCheckout: (name: string) => void
  // coffeeListStorage: SelectedCoffeesData[]
}

export const CoffeesContext = createContext({} as CoffeeContextProps)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeeSelected, setCoffeeSelected] = useState<SelectedCoffeesData[]>(
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee-shop:coffee-list-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return []
      }
    },
  )

  function setCoffee(coffees: SelectedCoffeesData[]) {
    setCoffeeSelected(coffees)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeSelected)

    localStorage.setItem(
      '@ignite-coffee-shop:coffee-list-state-1.0.0',
      stateJSON,
    )
  }, [coffeeSelected])

  function increaseAmountOnCheckout(name: string) {
    const increase = coffeeSelected.map((coffee) =>
      coffee.name === name
        ? {
            ...coffee,
            amount: coffee.amount + 1,
            total: coffee.price * (coffee.amount + 1),
          }
        : coffee,
    )

    setCoffee(increase)
  }

  function decreaseAmountOnCheckout(name: string) {
    const decrease = coffeeSelected.map((coffee) =>
      coffee.name === name && coffee.amount > 0
        ? {
            ...coffee,
            amount: coffee.amount - 1,
            total: coffee.price * (coffee.amount - 1),
          }
        : coffee,
    )

    setCoffee(decrease)
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeeSelected,
        setCoffee,
        increaseAmountOnCheckout,
        decreaseAmountOnCheckout,
        // coffeeListStorage,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
