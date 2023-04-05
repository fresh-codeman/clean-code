class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function calculateArea(rectangle) {
  rectangle.setWidth(5);
  rectangle.setHeight(10);
  return rectangle.area();
}

const rectangle = new Rectangle(5, 10);
const square = new Square(5);

console.log(calculateArea(rectangle));
console.log(calculateArea(square)); 