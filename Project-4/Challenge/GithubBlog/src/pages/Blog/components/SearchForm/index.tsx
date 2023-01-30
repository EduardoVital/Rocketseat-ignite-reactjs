import { Form } from './styles'

export function SearchForm() {
  return (
    <Form>
      <div>
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </Form>
  )
}
