import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface ListCardData {
  title: string
  content: string
  date: string
  id: number
}

interface BlogContextType {
  list: ListCardData[]
  total: number
  setSearchText: (term: string) => void
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [list, setList] = useState<ListCardData[]>([])
  const [search, setSearch] = useState<string>()
  const [total, setTotal] = useState<number>(0)

  const texto = 'Boas Práticas'
  const userName = 'rocketseat-education'
  const repo = 'reactjs-github-blog-challenge'

  const getListofCotents = async () => {
    await api
      .get(`/search/issues?q=${texto}%20repo:${userName}/${repo}`)
      .then((response) => {
        setTotal(response?.data?.total_count ? response?.data?.total_count : 0)

        const getListOfItems = response.data.items.map((item: any) => {
          return {
            title: item.title,
            content: item.body,
            date: item.created_at,
            id: item.id,
          }
        })
        setList(getListOfItems)
      })
  }

  useEffect(() => {
    getListofCotents()
  }, [list])

  function setSearchText(term: string) {
    console.log(term)
    setSearch(term)
  }

  return (
    <BlogContext.Provider value={{ list, total, setSearchText }}>
      {children}
    </BlogContext.Provider>
  )
}
