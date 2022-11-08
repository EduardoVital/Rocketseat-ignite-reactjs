import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    padding: 0 10rem;
    margin: 0 auto;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input {
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-label']};
    border-radius: 0.25rem;
    outline: none;
    border: none;
    padding: 0.75rem;
    width: 12.5rem;
  }

  .title-form {
    display: flex;
    align-items: flex-start;
  }
`
