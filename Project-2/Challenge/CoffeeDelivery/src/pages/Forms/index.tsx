import { Form } from './components/Form'
import { CartView } from './components/CartView'
import { CheckoutContainer } from './styles'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export function Forms() {
  const { formInfo, setCheckout } = useContext(CoffeesContext)
  const navigate = useNavigate()

  const handleSubmitForm = (event: any) => {
    event.preventDefault()

    const { payment, address, number } = formInfo

    if (payment) {
      setCheckout({
        payment,
        address,
        number,
      })
      navigate('/checkout')
    }
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
