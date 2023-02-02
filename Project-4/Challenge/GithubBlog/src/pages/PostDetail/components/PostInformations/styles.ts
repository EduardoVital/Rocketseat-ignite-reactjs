import styled from 'styled-components'

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  a {
    font-size: 0.75rem;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    outline: none;

    color: ${(props) => props.theme.blue};
  }
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 0.5rem;
`
