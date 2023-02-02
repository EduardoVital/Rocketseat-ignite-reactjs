/* eslint-disable camelcase */
import { useContext } from 'react'
import { BlogContext } from '../../../../context/BlogContext'
import { Card, ListCardsContainer } from './styles'

export function ListCard() {
  const { list } = useContext(BlogContext)

  return (
    <ListCardsContainer>
      {list.map((item) => {
        return (
          <Card key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <span>Há 1 dia</span>
            </div>
            <p>{item.content}</p>
          </Card>
        )
      })}
    </ListCardsContainer>
  )
}
