import coffeeAmericano from '../assets/coffees/americano.svg'
import coffeeExpresso from '../assets/coffees/expresso.svg'
import coffeeExpressoCremoso from '../assets/coffees/expressoCremoso.svg'
import coffeeGelado from '../assets/coffees/cafeGelado.svg'
import coffeeCafeComLeite from '../assets/coffees/cafeComLeite.svg'
import coffeeLatte from '../assets/coffees/latte.svg'
import coffeeCapuccino from '../assets/coffees/capuccino.svg'
import coffeeMacchiato from '../assets/coffees/macchiato.svg'
import coffeeMocaccino from '../assets/coffees/mocaccino.svg'
import coffeeChocolate from '../assets/coffees/chocolate.svg'
import coffeeCubano from '../assets/coffees/cubano.svg'
import coffeeHavaiano from '../assets/coffees/havaiano.svg'
import coffeeArabe from '../assets/coffees/arabe.svg'
import coffeeIrlandes from '../assets/coffees/irlandes.svg'

export const coffeesList = [
  {
    name: 'Expresso Tradicional',
    image: coffeeExpresso,
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.9,
  },
  {
    name: 'Expresso Americano',
    image: coffeeAmericano,
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
  },
  {
    name: 'Expresso Cremoso',
    image: coffeeExpressoCremoso,
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
  },
  {
    name: 'Expresso Gelado',
    image: coffeeGelado,
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
  },
  {
    name: 'Café com leite',
    image: coffeeCafeComLeite,
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    name: 'Latte',
    image: coffeeLatte,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    name: 'Capuccino',
    image: coffeeCapuccino,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    name: 'Macchiato',
    image: coffeeMacchiato,
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    name: 'Mocaccino',
    image: coffeeMocaccino,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    name: 'Chocolate Quente',
    image: coffeeChocolate,
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    name: 'Cubano',
    image: coffeeCubano,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['tradicional', 'alcoólico', 'gelado'],
    price: 9.9,
  },
  {
    name: 'Havaiano',
    image: coffeeHavaiano,
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.9,
  },
  {
    name: 'Árabe',
    image: coffeeArabe,
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
  },
  {
    name: 'Irlandês',
    image: coffeeIrlandes,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 9.9,
  },
]
