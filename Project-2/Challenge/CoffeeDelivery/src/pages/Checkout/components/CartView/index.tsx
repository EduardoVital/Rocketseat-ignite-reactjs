import { CoffeeCard } from '../../../../components/CoffeeCard'
import { CoffeesAmount } from './components/CoffeesAmount'
import { TotalItems } from './components/TotalItems'
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
