import logoCoffeeDelivery from '../../assets/logo.svg'
import localeIcon from '../../assets/locale.svg'
import shoppingCartIcon from '../../assets/shoppingCart.svg'

import { HeaderContainer, ShoppingBox } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoCoffeeDelivery} alt="" />
      </span>

      <ShoppingBox>
        <div>
          <img src={localeIcon} alt="" />
          <p>Porto Alegre, RS</p>
        </div>
        <div>
          <img src={shoppingCartIcon} alt="" />
          <span>1</span>
        </div>
      </ShoppingBox>
    </HeaderContainer>
  )
}
