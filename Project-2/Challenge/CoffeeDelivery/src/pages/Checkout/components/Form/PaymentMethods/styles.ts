import styled from 'styled-components'

export const PaymentForm = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  width: 40rem;
  border-radius: 0.375rem;
  margin: 0.75rem 0 3rem;

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

export const PaymentOptionsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['base-button']};
    width: 11.25rem;
    padding: 1rem;
    border-radius: 0.375rem;
    cursor: pointer;

    img {
      margin-right: 0.75rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`
