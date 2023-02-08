import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const dateFormatter = (date: string | undefined) => {
  return formatDistanceToNow(new Date(date!), {
    addSuffix: true,
    locale: ptBR,
  })
}
