// 1.
function potentialEnergy(mass, height) {
// potential energy = mgh
    return mass * 9.81 * height;
} 

// 2.
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 3. 
const users = [{
    name: 'Matt',
    age: 30
  }, {
    name: 'Austin',
    age: 20
  }].filter(user => user.age >= 21)