import styled from 'styled-components'

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;

  p {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;

    span {
      font-size: 1rem;
    }
  }

  .total-price {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 700;
  }

  button {
    margin-top: 0.75rem;
    height: 2.875rem;
    border-radius: 0.375rem;
    border: none;
    background-color: ${(props) => props.theme.yellow};
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`
