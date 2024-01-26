/**
 * 抽象工厂模式是一种创建型设计模式，它能创建一系列相关的对象，而无需指定其具体类。
 * 如果代码需要与多个不同系列的相关产品交互，但是由于无法提前获取相关信息，
 * 或者出于对未来扩展性的考虑，你不希望代码基于产品的具体类进行构建，
 * 在这种情况下，你可以使用抽象工厂。
 * 优点1：你可以确保同一工厂生成的产品相互匹配。
 * 优点2：你可以避免客户端和具体产品代码的耦合。
 * 优点3：单一职责原则。 你可以将产品生成代码抽取到同一位置， 使得代码易于维护。
 * 优点4：开闭原则。 向应用程序中引入新产品变体时， 你无需修改客户端代码。
 * 缺点：由于采用该模式需要向应用中引入众多接口和类， 代码可能会比'工厂方法'更加复杂。
 */

import { IDrink } from './IDrink'
import { IFood } from './IFood'

export interface IMealFactory {
  createDrink(): IDrink
  createFood(): IFood
}
