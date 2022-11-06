import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`

export const ShoppingBox = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 0.5rem;
    border-radius: 6px;
    position: relative;

    span {
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      background-color: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.75rem;
      position: absolute;
      top: -6px;
      right: -6px;
    }

    a {
      display: flex;
    }
  }

  div:nth-child(1) {
    background-color: ${(props) => props.theme['purple-light']};
    img {
      margin-right: 0.25rem;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
