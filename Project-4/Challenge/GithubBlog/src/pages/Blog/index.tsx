import { ListCard } from './components/ListCard'
import { ProfileCard } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <div>
      <BlogContainer>
        <ProfileCard />
        <SearchForm />
        <ListCard />
      </BlogContainer>
    </div>
  )
}
