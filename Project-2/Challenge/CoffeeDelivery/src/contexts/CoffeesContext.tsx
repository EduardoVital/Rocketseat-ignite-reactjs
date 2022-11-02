import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

interface SelectedCoffeesData {
  name: string
  amount: number
  image: string
}

export const CoffeesContext = createContext({} as SelectedCoffeesData)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  return (
    <CoffeesContext.Provider
      value={
        {
          // cycles,
          // activeCycle,
          // activeCycleId,
          // markCurrentCycleAsFinished,
          // amountSecondsPassed,
          // setSecondsPassed,
          // createNewCycle,
          // interruptCurrentCycle,
        }
      }
    >
      {children}
    </CoffeesContext.Provider>
  )
}
