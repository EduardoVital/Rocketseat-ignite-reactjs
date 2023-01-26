import { HeaderContainer } from './styles'
import Background from '../../assets/Background.svg'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer background={Background}>
      <img src={Logo} alt="" />
    </HeaderContainer>
  )
}
