import { CoffeeCard } from '../../../../components/CoffeeCard'
import { Title, SelectedCoffeesCard, Coffees } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesCard>
      <Title>Coffees</Title>

      <CoffeeCard width="G" padding="G">
        <Coffees></Coffees>
      </CoffeeCard>
    </SelectedCoffeesCard>
  )
}
