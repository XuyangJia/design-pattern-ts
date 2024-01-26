import { IDrink } from './interface/IDrink'

export class Juice implements IDrink {
  make(): string {
    return 'make Juice'
  }
  show(): string {
    return 'show Juice'
  }
}
