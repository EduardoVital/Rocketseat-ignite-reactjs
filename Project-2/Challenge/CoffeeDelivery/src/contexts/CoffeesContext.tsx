import { createContext, ReactNode, useState } from 'react'

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
}

export const CoffeesContext = createContext({} as CoffeeContextProps)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeeSelected, setCoffeeSelected] = useState<SelectedCoffeesData[]>(
    [],
  )

  function setCoffee(coffees: SelectedCoffeesData[]) {
    setCoffeeSelected(coffees)
  }

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
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
