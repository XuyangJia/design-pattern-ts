import { IFood } from './interface/IFood'

export class Cake implements IFood {
  make(): string {
    return 'make Cake'
  }
  show(): string {
    return 'show Cake'
  }
}
