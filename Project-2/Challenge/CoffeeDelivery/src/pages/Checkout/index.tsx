import { Form } from './components/Form'
import { CartView } from './components/CartView'
import { CheckoutContainer } from './styles'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { useContext } from 'react'

export function Checkout() {
  const { formInfo } = useContext(CoffeesContext)

  const handleSubmitForm = (event: any) => {
    event.preventDefault()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmitForm}>
        <Form />
        <CartView />
      </form>
    </CheckoutContainer>
  )
}
