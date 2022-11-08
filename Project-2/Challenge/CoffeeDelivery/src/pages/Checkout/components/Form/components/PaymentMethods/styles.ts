import styled from 'styled-components'

export const PaymentForm = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  width: 40rem;
  border-radius: 0.375rem;
  margin-top: 0.75rem;

  .title-form {
    img {
      padding-right: 0.5rem;
    }

    div {
      display: flex;
      flex-direction: column;

      p {
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
        margin-bottom: 0.125rem;
      }

      span {
        font-size: 0.875rem;
      }
    }
  }
`
