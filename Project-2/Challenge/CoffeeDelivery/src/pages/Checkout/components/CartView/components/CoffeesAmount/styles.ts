import styled from 'styled-components'

export const Coffees = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;

    .coffee-image {
      width: 4rem;
      margin-right: 1.25rem;
    }

    .coffee-name {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    .coffee-price {
      flex-grow: 1;
      text-align: right;
      align-self: flex-start;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
      font-weight: bold;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      p {
        align-self: flex-start;
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 2rem;

        div {
          padding: 0.5rem;
        }

        .coffee-remove {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          background-color: ${(props) => props.theme['base-button']};
          border-radius: 0.375rem;
          cursor: pointer;
          border: none;

          img {
            margin-right: 0.25rem;
          }

          p {
            font-size: 0.75rem;
            color: ${(props) => props.theme['base-text']};
          }
        }
      }
    }
  }
`

export const Divider = styled.span`
  border: 0.063rem solid ${(props) => props.theme['base-button']};
  width: 100%;
  margin: 1.5rem 0;
`
