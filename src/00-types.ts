'use strict'
let arr = [1,2 ,3]
const result = arr.find(item => item > 2) as number
result * 3

let v1: string | null = null
let v2: 1| 4|7 = 4

let arr1: number[] = [1, 2, 3, 4]
let arr2: Array<string> = ['2', '5', '8']

// 元组
let t1: [number, string, number?] = [1, 'a']

// 枚举
enum MyEnum {
  A, B, C
}
console.log(MyEnum.B)
console.log(MyEnum[1])

// 函数重载
function fun(p: string):string
function fun(p: number):string
function fun(p: string|number):string {
    return p + ''
}

console.log(fun('xiaoming'))
console.log(fun(20))

interface Parent {
  prop1: string
  prop2: number
}

interface Child extends Parent {
  prop3: boolean
}

const aa: Child = {
  prop1: 'abc',
  prop2: 2333,
  prop3: false
}

console.log(aa)

class Student {
  public name: string
  public age?: number
  private grade = 100
  private static readonly school: string = '一中'
  constructor(name: string) {
    this.name = name
  }
}
const xiaoming = new Student('xiaoMing')
console.log(xiaoming.name);


class User {
  private _password: string = ''

  get password(): string {
    return '******'
  }
  set password(v: string) {
    this._password = v
  }
}

// 抽象类
abstract class Animal {
  abstract name: string
  abstract makeSound(): void
  move(): void {
    console.log('移动')
  }
}

class Cat extends Animal {
  name: string = 'cat'
  makeSound(): void {
    console.log('喵~~~');
  }
}

// 类实现接口
interface Animal2{
  name: string
  move(): void
}

interface AA {
  age: number
}
class Dog implements Animal2, AA {
  name: string = 'dog'
  age: number = 1
  move(): void {
    console.log('移动')
  }
}

// 泛型类
class MyClass<T> {
  v: T
  constructor(value: T) {
    this.v = value
  }
  do(input: T): T {
    console.log('deal with: ', this.v)
    return this.v
  }
}
const myStr = new MyClass<string>('hi')
myStr.do('233')

const myNum = new MyClass<number>(123)
myNum.do(456)
