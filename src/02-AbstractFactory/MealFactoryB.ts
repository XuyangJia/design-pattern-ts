import { IMealFactory } from './interface/IAbstractFactory'
import { IDrink } from './interface/IDrink'
import { IFood } from './interface/IFood'
import { Tea } from './Tea'
import { Cake } from './Cake'

export class MealFactoryB implements IMealFactory {
  createDrink(): IDrink {
    return new Tea()
  }

  createFood(): IFood {
    return new Cake()
  }
}
