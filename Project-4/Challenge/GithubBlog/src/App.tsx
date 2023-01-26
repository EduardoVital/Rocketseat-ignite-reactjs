import { ThemeProvider } from 'styled-components'
import { Blog } from './pages/Blog'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Blog />
    </ThemeProvider>
  )
}

export default App
