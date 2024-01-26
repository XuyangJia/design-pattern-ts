/**
 * 工厂方法模式是一种创建型设计模式，其在父类中提供一个创建对象的方法，允许子类决定实例化对象的类型。
 * 优点1：你可以避免创建者和具体产品之间的紧密耦合。
 * 优点2：单一职责原则。你可以将产品创建代码放在程序的单一位置，从而使得代码更容易维护。
 * 优点3：开闭原则。无需更改现有客户端代码，你就可以在程序中引入新的产品类型。
 * 缺点：应用工厂方法模式需要引入许多新的子类，代码可能会因此变得更复杂。
 */

import { IShape } from './shapes/IShape'
import { Circle } from './shapes/Circle'
import { Rectangle } from './shapes/Rectangle'

export class ShapeFactory {
  public static CIRCLE: Symbol = Symbol('circle')
  public static RECTANGLE: Symbol = Symbol('rectangle')
  constructor() {
    console.log('初始化工厂')
  }
  getShape(shapeType: Symbol): IShape | undefined {
    switch (shapeType) {
      case ShapeFactory.CIRCLE:
        return new Circle()
      case ShapeFactory.RECTANGLE:
        return new Rectangle()
    }
  }
}
