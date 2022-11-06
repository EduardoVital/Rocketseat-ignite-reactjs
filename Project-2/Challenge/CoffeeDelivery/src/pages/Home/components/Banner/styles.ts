import styled, { css } from 'styled-components'

interface BackgroundColorProps {
  icon: string
}

export const BannerContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 5.75rem 0;
`

export const BannerListItemsContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 36.25rem;
`

export const BannerListItems = styled.div<BackgroundColorProps>`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  width: ${(props) =>
    props.icon === 'cartIcon' || props.icon === 'clockIcon'
      ? '14.688rem'
      : '18.75rem'};

  div {
    border-radius: 50%;
    background-color: black;
    padding: 0.625rem;
    display: flex;
    margin-right: 0.75rem;

    ${(props) =>
      props.icon === 'cartIcon' &&
      css`
        background-color: ${(props) => props.theme['yellow-dark']};
      `}
    ${(props) =>
      props.icon === 'boxIcon' &&
      css`
        background-color: ${(props) => props.theme['base-text']};
      `}
    ${(props) =>
      props.icon === 'clockIcon' &&
      css`
        background-color: ${(props) => props.theme.yellow};
      `}
    ${(props) =>
      props.icon === 'coffeeIcon' &&
      css`
        background-color: ${(props) => props.theme.purple};
      `}
  }
`

export const BannerImage = styled.div`
  width: 45%;
  img {
    width: 100%;
  }
`

export const BannerInfos = styled.div`
  width: 55%;
`

export const BannerText = styled.div`
  margin-bottom: 4.125rem;

  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', sans-serif;
    line-height: 3.875rem;
  }

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
