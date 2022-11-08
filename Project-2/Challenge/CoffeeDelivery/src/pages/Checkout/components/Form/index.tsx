import { LocaleForm } from './components/LocaleForm/LocaleForm'
import { PaymentMethods } from './components/PaymentMethods'
import { Title } from './styles'

export function Form() {
  return (
    <section>
      <Title>Complete o seu pedido</Title>
      <LocaleForm />
      <PaymentMethods />
    </section>
  )
}
