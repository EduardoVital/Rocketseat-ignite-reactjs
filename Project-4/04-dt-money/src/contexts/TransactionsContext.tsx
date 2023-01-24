import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface Paginate {
  totalCount: number | undefined
  page: number
  itemsPerPage: number
}

interface TransactionContextType {
  transactions: Transaction[]
  pagination: Paginate
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  setPage: (page: number) => void
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [pagination, setPagination] = useState<Paginate>({
    totalCount: 0,
    itemsPerPage: 5,
    page: 1,
  })

  const fetchTransactions = useCallback(
    async (query?: string, page = pagination.page) => {
      const response = await api.get('transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          _page: page,
          _limit: 5,
          q: query,
        },
      })

      setPagination({
        ...pagination,
        totalCount: Number(response.headers['x-total-count']),
      })
      setTransactions(response.data)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pagination.page],
  )

  const setPage = (page: number) => {
    setPagination({ ...pagination, page })
  }

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        pagination,
        setPage,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
