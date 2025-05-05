/**
 * * define main function for module with libs
 */

// import * from './demo23.modules.libs'
import sayHello, { PI, double, Shape as ShapeType } from "./lab10/lab10.module.libs"

sayHello()
console.log(`PI = ${PI}`)
console.log(`Double value of 4 = ${double(4)}`)

const shape : ShapeType = new ShapeType('Green')
console.log(shape.color)