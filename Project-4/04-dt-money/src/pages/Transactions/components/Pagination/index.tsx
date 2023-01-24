import { PaginationContainer, PaginationCount } from './styles'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

export function Pagination() {
  const pagination = useContextSelector(TransactionsContext, (context) => {
    return context.pagination
  })
  const setPage = useContextSelector(TransactionsContext, (context) => {
    return context.setPage
  })

  const pages = []

  const disabledPrevButton = pagination.page === 1
  const disabledNextButton = pagination.page === pages.length

  for (
    let i = 1;
    i <= Math.ceil(pagination.totalCount! / pagination.itemsPerPage);
    i++
  ) {
    pages.push(i)
  }

  function handleChangePage(page: number) {
    setPage(page)
  }

  function handleNextPage(page: number) {
    setPage(page + 1)
  }

  function handlePrevPage(page: number) {
    setPage(page - 1)
  }

  return (
    <PaginationContainer>
      <button
        disabled={disabledPrevButton}
        onClick={() => handlePrevPage(pagination.page)}
      >
        <CaretLeft
          size={32}
          color={pagination.page === 1 ? '#323238' : '#015F43'}
        />
      </button>
      {pages.map((page) => {
        return (
          <PaginationCount
            page={page}
            currentPage={pagination.page}
            key={page}
            onClick={() => handleChangePage(page)}
          >
            <span>{page}</span>
          </PaginationCount>
        )
      })}
      <button
        disabled={disabledNextButton}
        onClick={() => handleNextPage(pagination.page)}
      >
        <CaretRight
          size={32}
          color={pagination.page === pages.length ? '#323238' : '#015F43'}
        />
      </button>
    </PaginationContainer>
  )
}
