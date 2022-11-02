// import increaseIcon from '../../../../assets/increase.svg'
import increaseIcon from '../../assets/increase.svg'
import decreaseIcon from '../../assets/decrease.svg'
import { Amount } from './styles'

interface TheAmountProps {
  amount: number
  name: string
  onIncreaseAmount: (name: string) => void
  onDecreaseAmount: (name: string) => void
}

export function TheAmount({
  amount,
  name,
  onDecreaseAmount,
  onIncreaseAmount,
}: TheAmountProps) {
  function handleIncreaseAmount(name: string) {
    onIncreaseAmount(name)
  }

  function handleDecreaseAmount(name: string) {
    onDecreaseAmount(name)
  }

  return (
    <Amount>
      <button onClick={() => handleDecreaseAmount(name)}>
        <img src={decreaseIcon} alt="" />
      </button>
      <span>{amount}</span>
      <button onClick={() => handleIncreaseAmount(name)}>
        <img src={increaseIcon} alt="" />
      </button>
    </Amount>
  )
}
