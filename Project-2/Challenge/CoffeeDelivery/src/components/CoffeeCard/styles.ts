import styled from 'styled-components'

interface CoffeeListBoxProps {
  width: 'M' | 'G'
  padding: 'M' | 'G'
}

export const CoffeeListBox = styled.div<CoffeeListBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  width: ${(props) => (props.width === 'M' ? '16rem' : '28rem')};
  border-radius: 0.375rem 2.25rem;
  padding: 0 1.25rem 1.25rem;
  padding: ${(props) => (props.width === 'M' ? '0 1.25rem 1.25rem' : '2.5rem')};
`
