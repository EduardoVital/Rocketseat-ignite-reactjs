import { TotalContainer } from './styles'

export function TotalItems() {
  return (
    <TotalContainer>
      <p>
        Total de itens
        <span>R$ 29,70</span>
      </p>

      <p>
        Entrega
        <span>R$ 3,50</span>
      </p>

      <p className="total-price">
        Total
        <span>R$ 33,20</span>
      </p>

      <button>CONFIRMAR PEDIDO</button>
    </TotalContainer>
  )
}
