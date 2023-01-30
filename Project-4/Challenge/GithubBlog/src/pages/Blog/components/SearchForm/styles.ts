import styled from 'styled-components'

export const Form = styled.div`
  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    p {
      font-weight: 700;
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};
  }
  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
