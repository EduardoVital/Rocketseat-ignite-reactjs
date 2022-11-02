import { useState } from 'react'

import {
  CoffeeListTitle,
  CoffeeListContainer,
  Label,
  Title,
  Subtitle,
  Footer,
  CoffeeListBox,
  CartButton,
  CoffeeImage,
  LabelsBox,
} from './styles'
import cartIcon from '../../../../assets/cart.svg'
import { TheAmount } from '../../../../components/TheAmount/index'
import { coffeesList } from '../../../../utilities/coffeesList'

interface CoffeeListData {
  name: string
  image: string
  description: string
  tags: string[]
  price: number
  amount: number
}

export function CoffeeList() {
  const [coffeeSelected, setCoffeeSelected] = useState<CoffeeListData[]>([])
  const [coffeeList, setCoffeeList] = useState<CoffeeListData[]>(coffeesList)

  function transformToUpperCase(text: string) {
    return text.toUpperCase()
  }

  function transformToCurrency(price: number) {
    return price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
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
      coffee.name === name
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
              }
            : cof,
        )
        setCoffeeSelected(increaseAmount)
      }
    } else {
      setCoffeeSelected([...coffeeSelected, coffee])
    }
  }

  return (
    <section>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

      <CoffeeListContainer>
        {coffeeList.map((coffee) => {
          return (
            <CoffeeListBox key={coffee.name}>
              <CoffeeImage src={coffee.image} alt={coffee.name} />

              <LabelsBox>
                {coffee.tags.map((tagsName, index) => {
                  return (
                    <Label key={index}>{transformToUpperCase(tagsName)}</Label>
                  )
                })}
              </LabelsBox>

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
            </CoffeeListBox>
          )
        })}
      </CoffeeListContainer>
    </section>
  )
}
