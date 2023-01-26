import styled from 'styled-components'

interface Background {
  background: string
}

export const HeaderContainer = styled.header<Background>`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background-image: url(${(props) => props.background});
  height: 18.5rem;

  img {
    margin-top: 4.125rem;
  }
`
