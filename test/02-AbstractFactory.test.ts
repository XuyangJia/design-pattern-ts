import { expect, test } from 'vitest'
import { MealFactoryA } from '../src/02-AbstractFactory/MealFactoryA'
import { MealFactoryB } from '../src/02-AbstractFactory/MealFactoryB'

test('MealFactoryA 生产Juice FriedChicken', () => {
  const mealFactoryA = new MealFactoryA()
  expect(mealFactoryA.createDrink().make()).toBe('make Juice')
  expect(mealFactoryA.createFood().make()).toBe('make FriedChicken')
  expect(mealFactoryA.createDrink().show()).toBe('show Juice')
  expect(mealFactoryA.createFood().show()).toBe('show FriedChicken')
})

test('MealFactoryB 生产Tea Cake', () => {
  const mealFactoryB = new MealFactoryB()
  expect(mealFactoryB.createDrink().make()).toBe('make Tea')
  expect(mealFactoryB.createFood().make()).toBe('make Cake')
  expect(mealFactoryB.createDrink().show()).toBe('show Tea')
  expect(mealFactoryB.createFood().show()).toBe('show Cake')
})
