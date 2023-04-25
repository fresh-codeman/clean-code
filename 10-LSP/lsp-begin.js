class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth(){
    return this.width
  }

  getHeight(){
    return this.height
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

class Test {
  getAreaTest(rectangle) {
    let width = rectangle.getWidth();
    rectangle.setHeight(10);
    console.log(`Expected area of + ${width * 10} + ", got " + ${rectangle.area()}`);
  }
}
const rectangle = new Rectangle(5, 10);
const testArea = new Test();
testArea.getAreaTest(rectangle);

const square = new Square(5);
testArea.getAreaTest(square);