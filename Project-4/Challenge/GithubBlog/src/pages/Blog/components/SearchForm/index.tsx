import { FormEvent, useContext } from 'react'
import { BlogContext } from '../../../../context/BlogContext'
import { Form } from './styles'

export function SearchForm() {
  const { total, setSearchText } = useContext(BlogContext)

  function handleChangeText(event: FormEvent<HTMLInputElement>) {
    setSearchText((event.target as HTMLInputElement).value)
  }

  return (
    <Form>
      <div>
        <p>Publicações</p>
        <span>{total} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={handleChangeText}
      />
    </Form>
  )
}
