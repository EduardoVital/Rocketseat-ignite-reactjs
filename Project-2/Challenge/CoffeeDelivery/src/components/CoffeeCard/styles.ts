import styled from 'styled-components'

export const CoffeeListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  border-radius: 0.375rem 2.25rem;
  padding: 0 1.25rem 1.25rem;
`
