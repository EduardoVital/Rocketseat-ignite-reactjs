import credit from '../assets/payment/credit.svg'
import debit from '../assets/payment/debit.svg'
import money from '../assets/payment/money.svg'

export const paymentOptions = [
  {
    name: 'Cartão de crédito',
    image: credit,
    key: 'C',
  },
  {
    name: 'Cartão de débito',
    image: debit,
    key: 'D',
  },
  {
    name: 'Dinheiro',
    image: money,
    key: 'M',
  },
]
