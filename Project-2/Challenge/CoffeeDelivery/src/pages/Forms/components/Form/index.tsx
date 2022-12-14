import { LocaleForm } from './LocaleForm/LocaleForm'
import { PaymentMethods } from './PaymentMethods'
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
