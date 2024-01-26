import { IFood } from './interface/IFood'

export class FriedChicken implements IFood {
  make(): string {
    return 'make FriedChicken'
  }
  show(): string {
    return 'show FriedChicken'
  }
}
