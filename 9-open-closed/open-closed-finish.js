class Shape {
  getArea() {}
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  getArea() {
    return this.length ** 2;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }
}

// Usage
const circle = new Circle(5);
console.log(`Area of circle with radius 5 is ${circle.getArea()}`);

const square = new Square(4);
console.log(`Area of square with length 4 is ${square.getArea()}`);

const triangle = new Triangle(4, 5);
console.log(`Area of triangle with base 4 and height 5 is ${triangle.getArea()}`);





class Employee {
  constructor(name, role) {
    this.name = name
    this.role = role;
  }

  getSalary() {
    return 0;
  }

  isManager(){
    return this.role == 'manager'
  }
  
}

class Manager extends Employee {
  getSalary() {
    return 100000;
  }
}

class Developer extends Employee {
  getSalary() {
    return 80000;
  }
}

class Designer extends Employee {
  getSalary() {
    return 70000;
  }
}

class Intern extends Employee {
  getSalary() {
    return 50000;
  }
}








class InvoicePersistence {
  save()
  {

  }
}

class DatabasePersistence extends InvoicePersistence{
  constructor(){
    super()
  }

  save(){
    //save to db
  }
}

class FilePersistence extends InvoicePersistence{
  constructor(){
    super()
  }

  save(){
    //save to file system
  }
}
