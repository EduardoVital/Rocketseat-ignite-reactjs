// import increaseIcon from '../../../../assets/increase.svg'
import increaseIcon from '../../assets/increase.svg'
import decreaseIcon from '../../assets/decrease.svg'
import { Amount } from './styles'

export function TheAmount() {
  return (
    <Amount>
      <button>
        <img src={decreaseIcon} alt="" />
      </button>
      <span>1</span>
      <button>
        <img src={increaseIcon} alt="" />
      </button>
    </Amount>
  )
}
