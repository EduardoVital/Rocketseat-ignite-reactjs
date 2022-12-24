import styled, { css } from 'styled-components'

interface RoundedDiv {
  color: string
}

export const BoxSellerInfosContainer = styled.section`
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 0.25rem;
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .box-seller-wrapper {
    display: flex;
    justify-content: space-between;
  }
`

export const BoxSellerInfos = styled.div`
  margin-top: 2.5rem;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(
      330deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
  border: 1px solid transparent;
  width: 32.875rem;
  border-radius: 0.375rem 2.25rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  .box-container {
    display: flex;

    span {
      font-size: 1rem;
      font-weight: 700;
    }
  }
`

export const RoundedIconImage = styled.div<RoundedDiv>`
  border-radius: 50%;
  padding: 0.625rem;
  display: flex;
  margin-right: 0.75rem;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  ${(props) =>
    props.color === 'Purple' &&
    css`
      background-color: ${(props) => props.theme.purple};
    `}

  ${(props) =>
    props.color === 'Yellow' &&
    css`
      background-color: ${(props) => props.theme.yellow};
    `}

    ${(props) =>
    props.color === 'Yellow-Dark' &&
    css`
      background-color: ${(props) => props.theme['yellow-dark']};
    `}
`
