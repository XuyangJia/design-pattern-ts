import { expect, test } from 'vitest'
import { ShapeFactory } from '../src/01-FactoryMethod/ShapeFactory'

const shapeFactory = new ShapeFactory()
test('ShapeFactory 生产圆形', () => {
  const circle = shapeFactory.getShape(ShapeFactory.CIRCLE)?.draw()
  expect(circle).toBe('绘制圆形')
})

test('ShapeFactory 生产矩形', () => {
  const rect = shapeFactory.getShape(ShapeFactory.RECTANGLE)?.draw()
  expect(rect).toBe('绘制矩形')
})
