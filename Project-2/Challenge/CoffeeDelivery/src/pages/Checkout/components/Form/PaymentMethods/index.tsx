import { PaymentForm, PaymentOptionsContainer } from './styles'
import paymentIcon from '../../../../../assets/paymentIcon.svg'
import { paymentOptions } from '../../../../../utilities/paymentMethodsList'
import { useContext, useState } from 'react'
import { CoffeesContext } from '../../../../../contexts/CoffeesContext'

export function PaymentMethods() {
  const { formInfo, setForm } = useContext(CoffeesContext)

  function transformToUpperCase(text: string) {
    return text.toUpperCase()
  }

  function handleSelectedPaymentMethods(method: string) {
    setForm({ ...formInfo, payment: method })
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
            <div
              key={payment.key}
              onClick={() => handleSelectedPaymentMethods(payment.name)}
              style={
                formInfo.payment === payment.name
                  ? { border: '1px solid #8047F8' }
                  : { border: 'none' }
              }
            >
              <img src={payment.image} alt="" />
              <p>{transformToUpperCase(payment.name)}</p>
            </div>
          )
        })}
      </PaymentOptionsContainer>
    </PaymentForm>
  )
}
