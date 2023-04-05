class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log('Engine started');
  }

  stopEngine() {
    console.log('Engine stopped');
  }

  turnOnAC() {
    console.log('AC turned on');
  }

  turnOffAC() {
    console.log('AC turned off');
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
}

class Motorbike extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
}

function drive(vehicle) {
  vehicle.startEngine();
  vehicle.turnOnAC();
  vehicle.stopEngine();
}

const car = new Car('Honda', 'Civic', 2020);
const motorbike = new Motorbike('Harley Davidson', 'Softail', 2021);

drive(car); 
drive(motorbike); 