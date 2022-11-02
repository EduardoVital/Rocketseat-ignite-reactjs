import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

interface SelectedCoffeesData {
  name: string
  image: string
  description: string
  tags: string[]
  price: number
  amount: number
}

interface CoffeeContextProps {
  coffeeSelected: SelectedCoffeesData[]
  setCoffee: (Coffees: SelectedCoffeesData[]) => void
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

  return (
    <CoffeesContext.Provider
      value={{
        coffeeSelected,
        setCoffee,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
