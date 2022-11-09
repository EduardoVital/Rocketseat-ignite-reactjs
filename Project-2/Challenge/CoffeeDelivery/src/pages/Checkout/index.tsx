import { Form } from './components/Form'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Form />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
