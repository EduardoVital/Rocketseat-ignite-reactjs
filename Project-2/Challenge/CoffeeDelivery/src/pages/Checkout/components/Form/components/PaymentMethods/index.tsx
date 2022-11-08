import { PaymentForm } from './styles'
import paymentIcon from '../../../../../../assets/paymentIcon.svg'

export function PaymentMethods() {
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
    </PaymentForm>
  )
}
