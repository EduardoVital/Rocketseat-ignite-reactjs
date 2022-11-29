import { PaymentForm, PaymentOptionsContainer } from './styles'
import paymentIcon from '../../../../../assets/paymentIcon.svg'
import { paymentOptions } from '../../../../../utilities/paymentMethodsList'

export function PaymentMethods() {
  function transformToUpperCase(text: string) {
    return text.toUpperCase()
  }

  return (
    <PaymentForm>
      <div className="title-form">
        <img src={paymentIcon} alt="" />
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>

      <PaymentOptionsContainer>
        {paymentOptions.map((payment) => {
          return (
            <div key={payment.key}>
              <img src={payment.image} alt="" />
              <p>{transformToUpperCase(payment.name)}</p>
            </div>
          )
        })}
      </PaymentOptionsContainer>
    </PaymentForm>
  )
}
