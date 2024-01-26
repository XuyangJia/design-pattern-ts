import { IDrink } from './interface/IDrink'

export class Tea implements IDrink {
  make(): string {
    return 'make Tea'
  }
  show(): string {
    return 'show Tea'
  }
}
