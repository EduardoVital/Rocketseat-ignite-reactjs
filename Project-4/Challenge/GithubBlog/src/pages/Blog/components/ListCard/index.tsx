import { useContext } from 'react'
import { BlogContext } from '../../../../context/BlogContext'
import { Card, ListCardsContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function ListCard() {
  const { list } = useContext(BlogContext)

  return (
    <ListCardsContainer>
      {list.map((item) => {
        return (
          <NavLink to={`/postdetail/${item.number}`} key={item.id}>
            <Card>
              <div>
                <h3>{item.title}</h3>
                <span>Há 1 dia</span>
              </div>
              <p>{item.content}</p>
            </Card>
          </NavLink>
        )
      })}
    </ListCardsContainer>
  )
}
