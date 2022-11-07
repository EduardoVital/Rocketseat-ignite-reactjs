import { ReactNode } from 'react'
import { CoffeeListBox } from './styles'

interface CoffeeCardProps {
  children: ReactNode
}

export function CoffeeCard({ children }: CoffeeCardProps) {
  return <CoffeeListBox>{children}</CoffeeListBox>
}
