import { Header } from '../../components/Header'
import { ProfileCard } from './components/ProfileCard'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <div>
      <Header />

      <BlogContainer>
        <ProfileCard />
      </BlogContainer>
    </div>
  )
}
