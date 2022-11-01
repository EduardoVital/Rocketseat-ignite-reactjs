import { Banner } from './components/Banner'
import { CoffeeList } from './components/CoffeeList'

import { coffeesList } from '../../utilities/coffeesList'

export function Home() {
  return (
    <>
      <Banner />
      <CoffeeList coffees={coffeesList} />
    </>
  )
}
