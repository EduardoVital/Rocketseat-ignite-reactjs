import styled from 'styled-components'

export const Amount = styled.div`
  padding: 0.75rem;
  margin-right: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 0.375rem;
  display: flex;
  align-items: center;

  span {
    margin: 0 0.5rem;
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
  }

  button {
    background: transparent;
  }
`
