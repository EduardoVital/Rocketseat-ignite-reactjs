import { Header } from '../../components/Header'
import { ListCard } from './components/ListCard'
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
        <ListCard />
      </BlogContainer>
    </div>
  )
}
