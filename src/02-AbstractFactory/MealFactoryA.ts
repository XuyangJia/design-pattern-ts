import { IMealFactory } from './interface/IAbstractFactory'
import { IDrink } from './interface/IDrink'
import { IFood } from './interface/IFood'
import { FriedChicken } from './FriedChicken'
import { Juice } from './Juice'

export class MealFactoryA implements IMealFactory {
  createDrink(): IDrink {
    return new Juice()
  }

  createFood(): IFood {
    return new FriedChicken()
  }
}
