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

interface FormInfos {
  zipCode: string
  address: string
  number: string
  aditionalAddress: string
  neighborhood: string
  city: string
  state: string
  payment: string
}

interface CheckoutInfos {
  address: string
  number: string
  payment: string
}

interface CoffeeContextProps {
  coffeeSelected: SelectedCoffeesData[]
  formInfo: FormInfos
  checkoutInfos: CheckoutInfos
  setCoffee: (coffees: SelectedCoffeesData[]) => void
  increaseAmountOnCheckout: (name: string) => void
  decreaseAmountOnCheckout: (name: string) => void
  setForm: (formFields: FormInfos) => void
  setCheckout: (checkout: CheckoutInfos) => void
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

  const [formInfo, setFormInfo] = useState<FormInfos>({
    zipCode: '',
    address: '',
    number: '',
    aditionalAddress: '',
    neighborhood: '',
    city: '',
    state: '',
    payment: '',
  })

  const [checkoutInfos, setCheckoutInfos] = useState<CheckoutInfos>({
    address: '',
    number: '',
    payment: '',
  })

  function setCheckout(checkout: CheckoutInfos) {
    setCheckoutInfos(checkout)
  }

  function setForm(formFields: FormInfos) {
    setFormInfo(formFields)
  }

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
        formInfo,
        checkoutInfos,
        increaseAmountOnCheckout,
        decreaseAmountOnCheckout,
        setCoffee,
        setForm,
        setCheckout,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
