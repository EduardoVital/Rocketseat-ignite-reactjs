import { TheAmount } from '../../../../../../components/TheAmount'
import { Coffees, Divider } from './styles'
import TrashIcon from '../../../../../../assets/trash.svg'
import { CoffeesContext } from '../../../../../../contexts/CoffeesContext'
import { useContext } from 'react'

export function CoffeesAmount() {
  const { coffeeSelected, increaseAmountOnCheckout, decreaseAmountOnCheckout } =
    useContext(CoffeesContext)

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

  return (
    <>
      {coffeeSelected.map((items) => {
        return (
          <Coffees key={items.name}>
            <div>
              <img className="coffee-image" src={items.image} alt="" />
              <div>
                <p className="coffee-name">Expresso Tradicional</p>
                <div>
                  <TheAmount
                    amount={items.amount}
                    onDecreaseAmount={handleDecreaseAmount}
                    onIncreaseAmount={handleIncreaseAmount}
                    name={items.name}
                  />
                  <button className="coffee-remove">
                    <img src={TrashIcon} alt="" />
                    <p>{transformToUpperCase('Remover')}</p>
                  </button>
                </div>
              </div>
              <p className="coffee-price">
                R$ {transformToCurrency(items.price)}
              </p>
            </div>
            <Divider />
          </Coffees>
        )
      })}
    </>
  )
}
