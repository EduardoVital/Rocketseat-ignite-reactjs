import { useContext, useState } from 'react'

import {
  CoffeeListTitle,
  CoffeeListContainer,
  Label,
  Title,
  Subtitle,
  Footer,
  CartButton,
  CoffeeImage,
  CoffeeLabels,
} from './styles'
import cartIcon from '../../../../assets/cart.svg'
import { TheAmount } from '../../../../components/TheAmount/index'
import { coffeesList } from '../../../../utilities/coffeesList'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { CoffeeCard } from '../../../../components/CoffeeCard'

interface CoffeeListData {
  name: string
  image: string
  description: string
  tags: string[]
  price: number
  amount: number
  total: number
}

export function CoffeeList() {
  const { setCoffee, coffeeSelected } = useContext(CoffeesContext)
  const [coffeeList, setCoffeeList] = useState<CoffeeListData[]>(coffeesList)

  function transformToUpperCase(text: string) {
    return text.toUpperCase()
  }

  function transformToCurrency(price: number) {
    return price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
  }

  function resetAmountToZero(name: string) {
    const reset = coffeeList.map((coffee) =>
      coffee.name === name
        ? {
            ...coffee,
            amount: 0,
          }
        : coffee,
    )

    setCoffeeList(reset)
  }

  function handleIncreaseAmount(name: string) {
    const increase = coffeeList.map((coffee) =>
      coffee.name === name
        ? {
            ...coffee,
            amount: coffee.amount + 1,
          }
        : coffee,
    )

    setCoffeeList(increase)
  }

  function handleDecreaseAmount(name: string) {
    const decrease = coffeeList.map((coffee) =>
      coffee.name === name && coffee.amount > 0
        ? {
            ...coffee,
            amount: coffee.amount - 1,
          }
        : coffee,
    )

    setCoffeeList(decrease)
  }

  function handleAddCoffeeToCart(coffee: CoffeeListData) {
    const isExists = coffeeSelected
      .map((coffees) => coffees.name)
      .includes(coffee.name)

    if (isExists) {
      if (coffee.amount > 0) {
        const increaseAmount = coffeeSelected.map((cof) =>
          cof.name === coffee.name
            ? {
                ...cof,
                amount: cof.amount + coffee.amount,
                total: cof.price * coffee.amount,
              }
            : cof,
        )
        setCoffee(increaseAmount)
      }
    } else {
      setCoffee([...coffeeSelected, coffee])
    }

    resetAmountToZero(coffee.name)
  }

  return (
    <section>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

      <CoffeeListContainer>
        {coffeeList.map((coffee) => {
          return (
            <CoffeeCard width="M" padding="M" key={coffee.name}>
              <CoffeeImage src={coffee.image} alt={coffee.name} />

              <CoffeeLabels>
                {coffee.tags.map((tagsName, index) => {
                  return (
                    <Label key={index}>{transformToUpperCase(tagsName)}</Label>
                  )
                })}
              </CoffeeLabels>

              <Title>{coffee.name}</Title>
              <Subtitle>{coffee.description}</Subtitle>

              <Footer>
                <p>
                  R$<span>{transformToCurrency(coffee.price)}</span>
                </p>
                <TheAmount
                  amount={coffee.amount}
                  name={coffee.name}
                  onDecreaseAmount={handleDecreaseAmount}
                  onIncreaseAmount={handleIncreaseAmount}
                />
                <CartButton onClick={() => handleAddCoffeeToCart(coffee)}>
                  <img src={cartIcon} alt="" />
                </CartButton>
              </Footer>
            </CoffeeCard>
          )
        })}
      </CoffeeListContainer>
    </section>
  )
}
