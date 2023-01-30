import { Header } from '../../components/Header'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <div>
      <Header />

      <BlogContainer>
        <ProfileCard />
        <SearchForm />
      </BlogContainer>
    </div>
  )
}
