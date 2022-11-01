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
  LabelsBox,
} from './styles'
import cartIcon from '../../../../assets/cart.svg'
import { TheAmount } from '../../../../components/TheAmount/index'

interface CoffeeListData {
  name: string
  image: string
  description: string
  tags: string[]
  price: number
}

interface CoffeeListProps {
  coffees: CoffeeListData[]
}

export function CoffeeList({ coffees }: CoffeeListProps) {
  function transformToUpperCase(text: string) {
    return text.toUpperCase()
  }

  function transformToCurrency(price: number) {
    return price.toLocaleString('pt-br', { minimumFractionDigits: 2 })
  }

  return (
    <section>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

      <CoffeeListContainer>
        {coffees.map((coffee) => {
          return (
            <CoffeeListBox key={coffee.name}>
              <CoffeeImage src={coffee.image} alt={coffee.name} />

              <LabelsBox>
                {coffee.tags.map((tagsName, index) => {
                  return (
                    <Label key={index}>{transformToUpperCase(tagsName)}</Label>
                  )
                })}
              </LabelsBox>

              <Title>{coffee.name}</Title>
              <Subtitle>{coffee.description}</Subtitle>
              <Footer>
                <p>
                  R$<span>{transformToCurrency(coffee.price)}</span>
                </p>
                <TheAmount />
                <CartButton>
                  <img src={cartIcon} alt="" />
                </CartButton>
              </Footer>
            </CoffeeListBox>
          )
        })}
      </CoffeeListContainer>
    </section>
  )
}
