import {
  CoffeeListTitle,
  CoffeeListContainer,
  Label,
  Title,
  Subtitle,
  Footer,
  CoffeeListBox,
  CartButton,
  CoffeeImage,
} from './styles'
import coffeeIrlandes from '../../../../assets/coffees/irlandes.svg'
import cartIcon from '../../../../assets/cart.svg'
import increaseIcon from '../../../../assets/increase.svg'
import decreaseIcon from '../../../../assets/decrease.svg'

export function CoffeeList() {
  function transformToUpperCase(text: string) {
    return text.toUpperCase()
  }

  return (
    <section>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

      <CoffeeListContainer>
        <CoffeeListBox>
          <CoffeeImage src={coffeeIrlandes} alt="" />
          <Label>{transformToUpperCase('Tradicional')}</Label>
          <Title>Expresso Tradicional</Title>
          <Subtitle>
            O tradicional café feito com água quente e grãos moídos
          </Subtitle>
          <Footer>
            <p>
              R$<span>9,90</span>
            </p>
            <div>
              <button>
                <img src={decreaseIcon} alt="" />
              </button>
              <span>1</span>
              <button>
                <img src={increaseIcon} alt="" />
              </button>
            </div>
            <CartButton>
              <img src={cartIcon} alt="" />
            </CartButton>
          </Footer>
        </CoffeeListBox>
      </CoffeeListContainer>
    </section>
  )
}
