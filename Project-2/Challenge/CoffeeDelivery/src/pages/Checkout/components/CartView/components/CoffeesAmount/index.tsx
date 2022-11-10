import { TheAmount } from '../../../../../../components/TheAmount'
import { Coffees, Divider } from './styles'
import TrashIcon from '../../../../../../assets/trash.svg'
import CoffeeAmericano from '../../../../../../assets/coffees/americano.svg'

interface CoffeesAmountProps {
  name: string
  image: string
  amount: number
  total: number
}

export function CoffeesAmount({
  name,
  image,
  amount,
  total,
}: CoffeesAmountProps) {
  function transformToUpperCase(text: string) {
    return text.toUpperCase()
  }

  return (
    <Coffees>
      <div>
        <img className="coffee-image" src={CoffeeAmericano} alt="" />
        <div>
          <p className="coffee-name">Expresso Tradicional</p>
          <div>
            <TheAmount amount={1} />
            <button className="coffee-remove">
              <img src={TrashIcon} alt="" />
              <p>{transformToUpperCase('Remover')}</p>
            </button>
          </div>
        </div>
        <p className="coffee-price">R$ 9,90</p>
      </div>
      <Divider />
    </Coffees>
  )
}
