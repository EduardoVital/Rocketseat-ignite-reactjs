import { ReactNode } from 'react'
import { CoffeeListBox } from './styles'

interface CoffeeCardProps {
  children: ReactNode
  width: 'M' | 'G'
  padding: 'M' | 'G'
}

export function CoffeeCard({ children, width, padding }: CoffeeCardProps) {
  return (
    <CoffeeListBox width={width} padding={padding}>
      {children}
    </CoffeeListBox>
  )
}
