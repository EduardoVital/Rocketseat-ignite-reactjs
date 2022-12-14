import { TheAmount } from '../../../../../components/TheAmount'
import { Coffees, Divider } from './styles'
import TrashIcon from '../../../../../assets/trash.svg'
import { CoffeesContext } from '../../../../../contexts/CoffeesContext'
import { useContext } from 'react'

export function CoffeesAmount() {
  const {
    coffeeSelected,
    increaseAmountOnCheckout,
    decreaseAmountOnCheckout,
    setCoffee,
  } = useContext(CoffeesContext)

  function transformToUpperCase(text: string) {
    return text.toUpperCase()
  }

  function transformToCurrency(price: number) {
    return price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
  }

  function handleDecreaseAmount(name: string) {
    decreaseAmountOnCheckout(name)
  }

  function handleIncreaseAmount(name: string) {
    increaseAmountOnCheckout(name)
  }

  function handleRemoveCoffee(name: string) {
    const removeCoffee = coffeeSelected.filter((coffee) => coffee.name !== name)

    setCoffee(removeCoffee)
  }

  return (
    <>
      {coffeeSelected.map((coffee) => {
        return (
          <Coffees key={coffee.name}>
            <div>
              <img className="coffee-image" src={coffee.image} alt="" />
              <div>
                <p className="coffee-name">Expresso Tradicional</p>
                <div>
                  <TheAmount
                    amount={coffee.amount}
                    onDecreaseAmount={handleDecreaseAmount}
                    onIncreaseAmount={handleIncreaseAmount}
                    name={coffee.name}
                  />
                  <button
                    className="coffee-remove"
                    onClick={() => handleRemoveCoffee(coffee.name)}
                  >
                    <img src={TrashIcon} alt="" />
                    <p>{transformToUpperCase('Remover')}</p>
                  </button>
                </div>
              </div>
              <p className="coffee-price">
                R$ {transformToCurrency(coffee.price)}
              </p>
            </div>
            <Divider />
          </Coffees>
        )
      })}
    </>
  )
}
