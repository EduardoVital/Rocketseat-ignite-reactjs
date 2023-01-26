import styled from 'styled-components'

export const Card = styled.div`
  margin-top: -5.438rem;

  padding: 2.5rem 2rem;

  width: 54rem;

  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 0.625rem;
  box-shadow: 0 0.125rem 1.75rem ${(props) => props.theme['base-input']};
`

export const CardContainer = styled.div`
  height: 9.25rem;
  display: flex;
  align-items: stretch;
  gap: 2rem;
`

export const ImageDiv = styled.div`
  img {
    width: 9.25rem;
    border-radius: 0.5rem;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child {
    display: flex;
    justify-content: space-between;

    margin-top: 0.5rem;

    h2 {
      font-weight: 700;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      text-decoration: none;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      gap: 0.75rem;
      img {
        width: 0.75rem;
      }
    }
  }
`

export const MediaInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    img {
      width: 1.125rem;
    }
  }
`
