import { Form } from './components/Form'
import { CartView } from './components/CartView'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Form />
      <CartView />
    </CheckoutContainer>
  )
}
