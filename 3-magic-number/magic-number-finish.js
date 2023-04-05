// 1. A magic number is a hard-coded numeric value

const GRAVITATIONAL_FORCE = 9.81;

function potentialEnergy(mass, height) {
// potential energy = mgh
    return mass * GRAVITATIONAL_FORCE * height;
} 

//2. not all numeric values are magic numbers

//3. For big projects a seprate file can be created for constants.

const { drinkingAge } = require('./constants')

const users = [{
  name: 'Matt',
  age: 30
}, {
  name: 'Austin',
  age: 20
}].filter(user => user.age >= drinkingAge)
