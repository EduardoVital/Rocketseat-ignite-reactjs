import styled from 'styled-components'

export const CoffeeListTitle = styled.h2`
  font-weight: 800;
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 2.188rem;
`

export const CoffeeListContainer = styled.div`
  padding-bottom: 9.375rem;

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`

export const CoffeeListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  border-radius: 0.375rem 2.25rem;
  padding: 0 1.25rem 1.25rem;
`

export const CoffeeImage = styled.img`
  margin-top: -1.25rem;
`

export const Label = styled.span`
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  margin: 0.75rem 0 1rem;
  border-radius: 6.25rem;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
`

export const Title = styled.h3`
  font-size: 1.25rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Subtitle = styled.p`
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.125rem;
  margin-bottom: 2.063rem;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: wrap;
  align-items: stretch;

  p {
    font-size: 0.875rem;
    margin-right: 1.438rem;

    span {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      margin-left: 0.313rem;
    }
  }

  div {
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
  }
`

export const CartButton = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['purple-dark']};

  img {
    width: 1.375rem;
  }
`
