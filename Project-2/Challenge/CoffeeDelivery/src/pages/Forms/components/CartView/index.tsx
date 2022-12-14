import { CoffeeCard } from '../../../../components/CoffeeCard'
import { CoffeesAmount } from './CoffeesAmount'
import { TotalItems } from './TotalItems'
import { Title, SelectedCoffeesCard } from './styles'

export function CartView() {
  return (
    <SelectedCoffeesCard>
      <Title>Coffees</Title>

      <CoffeeCard width="G" padding="G">
        <CoffeesAmount />
        <TotalItems />
      </CoffeeCard>
    </SelectedCoffeesCard>
  )
}
