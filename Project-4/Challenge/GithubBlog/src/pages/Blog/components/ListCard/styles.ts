import styled from 'styled-components'

export const ListCardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
  gap: 2rem;
`

export const Card = styled.div`
  width: 26rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 0.625rem;
  padding: 2rem;
  border: 1px solid ${(props) => props.theme['base-post']};

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
    transition: 0.2s;
  }

  div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h3 {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
      width: 17.5rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 6.25rem;
    font-size: 1rem;
    line-height: 1.6rem;
  }
`
