import styled from 'styled-components'

export const Form = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  width: 40rem;
  border-radius: 0.375rem;

  .title-form {
    img {
      padding-right: 0.5rem;
    }

    div {
      display: flex;
      flex-direction: column;

      p {
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
        margin-bottom: 0.125rem;
      }

      span {
        font-size: 0.875rem;
      }
    }
  }

  .fields-form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      width: 100%;
      display: flex;
      gap: 0 0.75rem;
      position: relative;

      span {
        position: absolute;
        right: 0;
        font-style: italic;
        font-size: 0.75rem;
        padding: 0.938rem 0.75rem;
        color: ${(props) => props.theme['base-label']};
      }
    }

    input {
      ::placeholder {
        color: ${(props) => props.theme['base-label']};
      }

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const InputZipCode = styled.input``
export const InputNumber = styled.input``
export const InputNeighborhood = styled.input``

export const InputAddres = styled.input`
  width: 100%;
`

export const InputAditionalAddress = styled.input`
  flex-grow: 1;
`

export const InputCity = styled.input`
  flex-grow: 1;
`

export const InputState = styled.input`
  width: 3.75rem;
`
