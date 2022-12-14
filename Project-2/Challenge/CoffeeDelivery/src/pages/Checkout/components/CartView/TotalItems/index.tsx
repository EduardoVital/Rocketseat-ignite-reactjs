import { useContext } from 'react'
import { CoffeesContext } from '../../../../../contexts/CoffeesContext'
import { TotalContainer } from './styles'

export function TotalItems() {
  const { coffeeSelected } = useContext(CoffeesContext)

  function transformToCurrency(price: number) {
    return price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
  }

  const deliveryPrice = 3.5

  const totalItemsPrice = coffeeSelected
    .map((coffees) => coffees.total)
    .reduce((acc, value) => {
      return acc + value
    }, 0)

  const total = totalItemsPrice + deliveryPrice

  return (
    <TotalContainer>
      <p>
        Total de itens
        <span>R$ {transformToCurrency(totalItemsPrice)}</span>
      </p>

      <p>
        Entrega
        <span>R$ {transformToCurrency(deliveryPrice)}</span>
      </p>

      <p className="total-price">
        Total
        <span>R$ {transformToCurrency(total)}</span>
      </p>

      <button type="submit">CONFIRMAR PEDIDO</button>
    </TotalContainer>
  )
}
