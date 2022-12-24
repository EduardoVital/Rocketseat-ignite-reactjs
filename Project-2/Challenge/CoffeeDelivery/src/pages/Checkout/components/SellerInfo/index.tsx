import localeIcon from '../../../../assets/checkout/localeIconCheckout.svg'
import clockIcon from '../../../../assets/checkout/clockIconCheckout.svg'
import paymentIcon from '../../../../assets/checkout/paymentIconCheckout.svg'
import deliveryImage from '../../../../assets/checkout/Delivery.svg'
import {
  BoxSellerInfos,
  BoxSellerInfosContainer,
  RoundedIconImage,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'

export function SellerInfo() {
  const { checkoutInfos } = useContext(CoffeesContext)

  const { address, number, payment } = checkoutInfos

  return (
    <BoxSellerInfosContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <div className="box-seller-wrapper">
        <BoxSellerInfos>
          <div className="box-container">
            <RoundedIconImage color="Purple">
              <img src={localeIcon} alt="" />
            </RoundedIconImage>
            <div className="box-container--text">
              <p>
                Entrega em{' '}
                <span>
                  {address}, {number}
                </span>
              </p>
              <p>Paraíso do vale - Bom Princípio, RS </p>
            </div>
          </div>
          <div className="box-container">
            <RoundedIconImage color="Yellow">
              <img src={clockIcon} alt="" />
            </RoundedIconImage>
            <div className="box-container--text">
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </div>
          <div className="box-container">
            <RoundedIconImage color="Yellow-Dark">
              <img src={paymentIcon} alt="" />
            </RoundedIconImage>
            <div className="box-container--text">
              <p>Pagamento na entrega</p>
              <span>{payment}</span>
            </div>
          </div>
        </BoxSellerInfos>

        <img src={deliveryImage} alt="" />
      </div>
    </BoxSellerInfosContainer>
  )
}
