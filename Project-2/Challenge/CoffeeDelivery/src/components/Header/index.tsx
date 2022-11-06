import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import logoCoffeeDelivery from '../../assets/logo.svg'
import localeIcon from '../../assets/locale.svg'
import shoppingCartIcon from '../../assets/shoppingCart.svg'
import { CoffeesContext } from '../../contexts/CoffeesContext'

import { HeaderContainer, ShoppingBox } from './styles'

export function Header() {
  const { coffeeSelected } = useContext(CoffeesContext)

  const numberOfItemsOnCart = coffeeSelected
    .map((coffees) => coffees.amount)
    .reduce((acc, value) => {
      return acc + value
    }, 0)

  return (
    <HeaderContainer>
      <span>
        <NavLink to="/" title="home">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
      </span>

      <ShoppingBox>
        <div>
          <img src={localeIcon} alt="" />
          <p>Porto Alegre, RS</p>
        </div>
        <div>
          <NavLink to="/checkout" title="Checkout">
            <img src={shoppingCartIcon} alt="" />
            {numberOfItemsOnCart > 0 && <span>{numberOfItemsOnCart}</span>}
          </NavLink>
        </div>
      </ShoppingBox>
    </HeaderContainer>
  )
}
