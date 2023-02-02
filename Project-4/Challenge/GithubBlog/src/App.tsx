import { ThemeProvider } from 'styled-components'
import { BlogContextProvider } from './context/BlogContext'
import { Blog } from './pages/Blog'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BlogContextProvider>
        <Blog />
      </BlogContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
