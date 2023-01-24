import styled from 'styled-components'

interface ActivePage {
  page: number
  currentPage: number
}

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 2.5rem;

  button {
    all: unset;
    cursor: pointer;
    display: flex;
  }
`
export const PaginationCount = styled.div<ActivePage>`
  background-color: ${(props) =>
    props.page === props.currentPage
      ? props.theme['green-700']
      : props.theme['gray-600']};
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  cursor: pointer;
`
// svg {
//   color: ${(props) =>
//     props.variant === 'income'
//       ? props.theme['green-300']
//       : props.theme['red-300']};
// }
